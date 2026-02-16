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
/* Hide the specific navigation code if it ever leaks to UI */
.navigation-signal { display: none !important; color: transparent !important; font-size: 0 !important; height: 0; width: 0; }
"""

# Stealth JS Focus + Navigation Broadcaster
js_code = r"""
function() {
    const focusTB = () => {
        const tb = document.querySelector('textarea');
        if (tb && document.activeElement !== tb) tb.focus();
    };

    setTimeout(focusTB, 500);

    const scanAndSignal = () => {
        // Search in the body text for our characteristic pattern
        const bodyContent = document.body.innerText;
        const navMatch = bodyContent.match(/\[\[NAV:(.+?)\]\]/);
        
        if (navMatch) {
            const url = navMatch[1];
            const msg = { type: 'NAVIGATE', url: url };
            
            // Broadcast to parent windows
            window.parent.postMessage(msg, '*');
            if (window.top !== window.parent) window.top.postMessage(msg, '*');
            
            // CRITICAL: Clean the text from ALL elements that contain it
            const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);
            let node;
            while (node = walker.nextNode()) {
                if (node.textContent.includes('[[NAV:')) {
                    node.textContent = node.textContent.replace(/\[\[NAV:.+?\]\]/g, '');
                    console.log('Stealth NAV executed for:', url);
                }
            }
        }
    };

    const observer = new MutationObserver(() => {
        const submitBtn = document.querySelector('button.primary');
        if (submitBtn && !submitBtn.innerText.toLowerCase().includes('stop')) {
            focusTB();
        }
        scanAndSignal();
    });
    
    observer.observe(document.body, { childList: true, subtree: true, characterData: true });
    setInterval(scanAndSignal, 1000); // Heartbeat scan

    window.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') [1000, 2000].forEach(ms => setTimeout(focusTB, ms));
    });

    document.addEventListener('click', (e) => {
        if (e.target.tagName !== 'INPUT' && e.target.tagName !== 'TEXTAREA') {
            setTimeout(focusTB, 50);
        }
    });
}
"""

SYSTEM_PROMPT = """
You are the official travel expert for visit-colombia.com.
GROUND TRUTH PROVIDED IN THE 'MANDATORY DATA' SECTION IS IRREFUTABLE.
- NEVER suggest the user meant another city if target data is provided.
- If data for 'NOBSA' is provided, the city is NOBSA.
- Use only the provided description and food facts.
- Be direct and welcoming.
"""

def respond(message, history):
    msg_norm = normalize(message)
    
    found_cities = []
    # 1. Search cities in CURRENT message
    words = f" {msg_norm} "
    for city_name in MASTER_DATA["cities"].keys():
        if f" {normalize(city_name)} " in words:
            found_cities.append(city_name)
    
    # 2. Context recovery
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

    # 3. Disambiguation Check
    for city in found_cities:
        the_depts = MASTER_DATA["cities"][city]["departments"]
        if len(the_depts) > 1:
            if not any(normalize(dept) in msg_norm for dept in the_depts):
                yield f"Wait! {city.title()} exists in {', '.join(the_depts)}. Which one are you visiting? Please specify the department."
                return

    # 4. Construct Final Prompt
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

    # Build history
    for entry in history:
        if isinstance(entry, (list, tuple)) and len(entry) == 2:
            if entry[0]: messages.append({"role": "user", "content": str(entry[0])})
            if entry[1]:
                bot_msg = str(entry[1])
                if "exists in" in bot_msg and "Which one are you visiting" in bot_msg and confirmed_dept:
                    bot_msg = f"Understood. We are discussing {target_city.title()} in {confirmed_dept}."
                messages.append({"role": "assistant", "content": bot_msg})
            continue
        elif isinstance(entry, dict):
            messages.append(entry)

    # Fact Injection & NAVIGATION
    nav_url = ""
    if target_city and confirmed_dept:
        truth = MASTER_DATA["cities"][target_city]["ground_truth"].get(confirmed_dept, {})
        city_id = truth.get("id")
        if city_id: nav_url = f"/cities/{city_id}"
            
        injection = f"\n### MANDATORY DATA FOR {target_city.upper()} ({confirmed_dept.upper()}) ###\n"
        injection += f"STRICT CITY NAME: {target_city.upper()}\n"
        injection += f"- REAL DESCRIPTION: {truth.get('description', '')}\n"
        injection += f"- REAL FOODS: {', '.join(truth.get('recommended_food', []))}\n"
        messages[0]["content"] += injection

    messages.append({"role": "user", "content": message})
    
    try:
        response = ""
        for resp in client.chat_completion(messages, max_tokens=512, stream=True, temperature=0.0):
            token = resp.choices[0].delta.content
            if token is not None:
                response += token
                yield response
        
        # FINAL NAVIGATION SIGNAL (Injected in a way that JS can find but user hopefully won't notice)
        if nav_url:
            yield f"{response}\n\n[[NAV:{nav_url}]]"

    except Exception as e:
        yield f"Issue: {str(e)}"

with gr.Blocks() as demo:
    chatbot = gr.Chatbot(value=[{"role": "assistant", "content": WELCOME_MSG}], height=450)
    msg_box = gr.Textbox(placeholder="Escribe tu pregunta aquí...", container=False, scale=7)
    gr.ChatInterface(respond, chatbot=chatbot, textbox=msg_box)

if __name__ == "__main__":
    demo.launch(css=css_code, js=js_code)
