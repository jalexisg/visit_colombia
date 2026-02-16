# Skill: AI Assistant (Anti-Hallucination)

## Description
This skill manages the **Visit Colombia AI Travel Expert**, ensuring geographical accuracy and seamless navigation between the chat and the web interface.

## Components
- **[app.py](../../app.py)**: The Gradio/Python backend logic.
- **[colombia_master.json](../../colombia_master.json)**: The "Ground Truth" database for 1,100+ municipalities.
- **[ChatWidget.tsx](../../components/ChatWidget.tsx)**: The frontend interceptor that handles auto-navigation.

## Core Mechanisms

### 1. Hybrid Grounding Strategy
To prevent the AI from "imagining" facts (hallucinating), we use a tripartite strategy:
- **Disambiguation**: If a city name exists in multiple departments (e.g., Barbosa), the system forces the user to specify which one.
- **Context Recovery**: The system parses the last 6 messages to maintain consistency about the current location.
- **Fact Injection**: Ground truth data (ID, Description, Food) is injected directly into the system prompt, overriding any previous training data.

### 2. Auto-Navigation Protocol
The assistant can "steer" the website by appending a navigation signal to its response:
- **Signal**: `[[NAV:/cities/ID]]` (e.g., `[[NAV:/cities/62]]` for Guatapé).
- **Transmission**: A "Nuclear Bridge" script in the Gradio `head` interceptor captures this tag, deletes it from the UI, and broadcasts it to the parent window via `postMessage`.
- **Handling**: `ChatWidget.tsx` listens for `type: 'NAVIGATE'` and uses `router.push(url)` to redirect the user.

## Maintenance
- **Updating Data**: Use the scripts in `scripts/geo_tools/` to refresh city IDs or knowledge from API Colombia.
- **Deploying**: Upload `app.py` and `colombia_master.json` to the Hugging Face Space.

## Best Practices
- **Strict Grounding**: Never allow the AI to suggest "nearby" cities or "did you mean" corrections unless they are in the Master Data.
- **Stealth Tags**: Always ensure the `[[NAV:]]` tags are processed and removed by the bridge script to keep the UI clean.
