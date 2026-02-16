import gradio as gr
import os
import json
import re
from huggingface_hub import InferenceClient

client = InferenceClient("Qwen/Qwen2.5-7B-Instruct", token=os.getenv("HF_TOKEN"))

def normalize(text):
    if not text: return ""
    text = str(text).lower()
    text = re.sub(r'[áäâà]', 'a', text)
    text = re.sub(r'[éëêè]', 'e', text)
    text = re.sub(r'[íïîì]', 'i', text)
    text = re.sub(r'[óöôò]', 'o', text)
    text = re.sub(r'[úüûù]', 'u', text)
    text = re.sub(r'[ñ]', 'n', text)
    text = re.sub(r'[^a-z ]', ' ', text)
    return " ".join(text.split())

def clean_api_response(text):
    if not text: return ""
    # Strip structured format: [{'text': '...', 'type': 'text'}]
    # We use a non-greedy regex to find text content inside quotes after 'text':
    pattern = r"\[\s*\{\s*['\"]text['\"]\s*:\s*['\"](.+?)['\"]\s*,\s*['\"]type['\"]\s*:\s*['\"]text['\"]\s*\}\s*\]"
    match = re.search(pattern, text, re.DOTALL)
    if match:
        return match.group(1).replace("\\n", "\n").replace("\\'", "'").replace('\\"', '"')
    
    # Handle partial or fallback: just strip the start/end brackets if they look like JSON
    text = text.strip()
    if text.startswith("[{'text':") or text.startswith('[{"text":'):
        # Brute force strip known keys if regex missed
        text = re.sub(r"^\[\s*\{\s*['\"]text['\"]\s*:\s*['\"]", "", text)
        text = re.sub(r"['\"]\s*,\s*['\"]type['\"]\s*:\s*['\"]text['\"]\s*\}\s*\]$", "", text)
        return text.replace("\\n", "\n").replace("\\'", "'").replace('\\"', '"')
    
    return text

# Cargar la base de datos Maestra
MASTER_DATA = {"cities": {}, "regional_context": {}}
status_geo = "OFFLINE"
try:
    if os.path.exists("colombia_master.json"):
        with open("colombia_master.json", "r", encoding="utf-8") as f:
            MASTER_DATA = json.load(f)
            status_geo = "MASTER KNOWLEDGE ACTIVE"
except Exception as e:
    print(f"Error: {e}")

WELCOME_MSG = f"Hello! Welcome to visit-colombia.com. ({status_geo})\nHow can I help you explore Colombia today?"

css_code = """
footer {display: none !important;}
.gradio-container {min-height: 0 !important;}
#component-0 {gap: 0 !important; padding: 0 !important;}
textarea {font-size: 16px !important;}
.bot.message { border-radius: 12px !important; transition: border 0.3s ease; }
/* Ocultar visualmente los tags antes de que el script los elimine */
span:contains("[[NAV:"), p:contains("[[NAV:") { opacity: 0; pointer-events: none; }
"""

# BRIDGE DE ALTA FIDELIDAD (HEAD INJECTION)
head_script = r"""
<script>
(function() {
    console.log("� Visit-Colombia Bridge Version 5.0 (Nuclear)");

    function dispatchNav(url, element) {
        const msg = { type: 'NAVIGATE', url: url };
        console.log("🚀 SIGNAL SENT:", url);
        
        // Efecto visual en la burbuja para confirmar detección
        if (element) {
            element.closest('.message').style.border = '2px solid #22c55e';
            setTimeout(() => { element.closest('.message').style.border = 'none'; }, 2000);
        }

        // Envío redundante
        window.parent.postMessage(msg, '*');
        window.parent.postMessage(JSON.stringify(msg), '*');
        if (window.top && window.top !== window.self) {
            window.top.postMessage(msg, '*');
            window.top.postMessage(JSON.stringify(msg), '*');
        }
    }

    function scan() {
        // Escaner de todos los elementos bot
        const messages = document.querySelectorAll('.bot.message, .bot p, .bot span');
        messages.forEach(el => {
            if (el.innerText && el.innerText.includes('[[NAV:')) {
                const match = el.innerText.match(/\[\[NAV:(.+?)\]\]/);
                if (match) {
                    const url = match[1];
                    // Quirúrgicamente borrar el código del DOM
                    el.innerHTML = el.innerHTML.replace(/\[\[NAV:.+?\]\]/g, '');
                    dispatchNav(url, el);
                }
            }
        });
    }

    // Intervalo agresivo (100ms)
    setInterval(scan, 100);

    // Gestor de Foco Hardened
    setInterval(() => {
        const tb = document.querySelector('textarea');
        const btn = document.querySelector('button.primary');
        if (tb && btn && !btn.innerText.toLowerCase().includes('stop')) {
            if (document.activeElement !== tb && document.activeElement.tagName !== 'INPUT') {
                // Solo recuperar foco si estamos en la ventana activa
                // tb.focus();
            }
        }
    }, 1000);
})();
</script>
"""

SYSTEM_PROMPT = """
You are the official travel expert for visit-colombia.com.
GROUND TRUTH PROVIDED IS IRREFUTABLE AND SUPERCEDES EVERYTHING.
- Respond ONLY with plain text. 
- DO NOT use JSON, brackets, or structured formats.
- If data for Nobsa or Bucaramanga is provided, use it.
- NEVER suggest other names.
- Be brief, helpful, and direct.
"""

def respond(message, history):
    msg_norm = normalize(message)
    
    found_cities = []
    # 1. Buscar ciudades
    words = f" {msg_norm} "
    for city_name in MASTER_DATA["cities"].keys():
        if f" {normalize(city_name)} " in words:
            found_cities.append(city_name)
    
    # 2. Contexto
    if not found_cities:
        for h in reversed(history[-6:]):
            text = ""
            if isinstance(h, dict): text = str(h.get("content", ""))
            elif isinstance(h, (list, tuple)) and len(h) >= 2: text = str(h[0]) if h[0] else ""
            norm_h = normalize(text)
            for city_name in MASTER_DATA["cities"].keys():
                if f" {normalize(city_name)} " in f" {norm_h} ":
                    found_cities = [city_name]
                    break
            if found_cities: break

    # 3. Disambiguación
    for city in found_cities:
        the_depts = MASTER_DATA["cities"][city]["departments"]
        if len(the_depts) > 1:
            if not any(normalize(dept) in msg_norm for dept in the_depts):
                yield f"Wait! {city.title()} exists in {', '.join(the_depts)}. Which one? Specify the department."
                return

    # 4. Prompt y Datos
    messages = [{"role": "system", "content": SYSTEM_PROMPT}]
    confirmed_dept = None
    target_city = found_cities[0] if found_cities else None
    if target_city:
        city_data = MASTER_DATA["cities"][target_city]
        depts_list = city_data["departments"]
        confirmed_dept = depts_list[0] if len(depts_list) == 1 else None
        if not confirmed_dept:
            for d in depts_list:
                if normalize(d) in msg_norm:
                    confirmed_dept = d
                    break

    for entry in history:
        if isinstance(entry, (list, tuple)) and len(entry) == 2:
            u, a = str(entry[0] or ""), str(entry[1] or "")
            # CLEAN assistant history: strip structured brackets AND old mandatory data
            a = clean_api_response(a)
            a_clean = re.sub(r"### MANDATORY DATA FOR .*? ###.*?\n", "", a, flags=re.DOTALL)
            if u: messages.append({"role": "user", "content": u})
            if a_clean: messages.append({"role": "assistant", "content": a_clean})
        elif isinstance(entry, dict):
            # If it's a dict, also clean assistant role content
            role = entry.get("role")
            content = str(entry.get("content", ""))
            if role == "assistant":
                content = clean_api_response(content)
                content = re.sub(r"### MANDATORY DATA FOR .*? ###.*?\n", "", content, flags=re.DOTALL)
            messages.append({"role": role, "content": content})

    # Inyección de Verdad Proporcional
    nav_url = ""
    if target_city and confirmed_dept:
        truth = MASTER_DATA["cities"][target_city]["ground_truth"].get(confirmed_dept, {})
        city_id = truth.get("id")
        if city_id: nav_url = f"/cities/{city_id}"
            
        injection = f"\n### MANDATORY DATA FOR {target_city.upper()} ###\n"
        injection += f"- DESCRIPTION: {truth.get('description', '')}\n"
        injection += f"- FOODS: {', '.join(truth.get('recommended_food', []))}\n"
        messages[0]["content"] += injection

    messages.append({"role": "user", "content": message})
    
    try:
        response = ""
        # Incremental token limit for longer descriptions (Tunja, etc.)
        for resp in client.chat_completion(messages, max_tokens=512, stream=True, temperature=0.0):
            if not resp.choices: continue
            token = resp.choices[0].delta.content
            if token is None: continue

            # HYPER-ROBUST EXTRACTION: Handle strings, dicts, lists, and chunks
            if isinstance(token, str):
                response += token
            elif isinstance(token, dict) and "text" in token:
                response += str(token["text"])
            elif isinstance(token, list):
                for item in token:
                    if isinstance(item, dict) and "text" in item:
                        response += str(item["text"])
                    else:
                        response += str(item)
            else:
                response += str(token)
            
            # Continuous cleaning of the response stream
            yield clean_api_response(response)
        
        # NAV TRIGGER - Always ensure it's appended cleanly
        if nav_url:
            final_clean = clean_api_response(response).strip()
            yield f"{final_clean}\n\n[[NAV:{nav_url}]]"

    except Exception as e:
        yield f"Issue: {str(e)}"

with gr.Blocks(head=head_script, css=css_code) as demo:
    chatbot = gr.Chatbot(value=[{"role": "assistant", "content": WELCOME_MSG}], height=450)
    msg_box = gr.Textbox(placeholder="Escribe tu pregunta aquí...", container=False, scale=7)
    gr.ChatInterface(respond, chatbot=chatbot, textbox=msg_box)

if __name__ == "__main__":
    demo.launch()
