# NeuroAssist – Live Captions Dashboard

NeuroAssist is a web dashboard that turns speech into large, easy‑to‑read captions in real time.  
It is designed for hearing‑impaired users and runs locally in your browser on a laptop or desktop.

## Features

- **Live Speech‑to‑Text Captions** – Uses the browser’s Web Speech API to turn spoken words into text.
- **Transcript History** – Save caption sessions, browse them later, and copy or export the text.
- **Accessibility‑First** – High‑contrast captions, keyboard shortcuts, and a layout focused on readability.
- **Privacy‑Focused** – Uses a local SQLite database; no external AI APIs or cloud services are required.

## How to run NeuroAssist on your laptop

### Prerequisites
- Node.js 18+
- A modern browser (Chrome, Edge, or Safari)

### 1. Clone this repository

```bash
# Open your laptop's terminal.

git clone https://github.com/EshunB/TSA.NeuroAssist.git
cd TSA.NeuroAssist
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up the local database

This project uses a local SQLite database via Prisma. The following command
creates (or updates) the database file based on `prisma/schema.prisma`:

```bash
npx prisma db push
```

You do **not** need any cloud database or API keys for the demo.

### 4. Start the development server

By default the app runs on port 5000:

```bash
npm run dev
```

Then open your browser to:

```text
http://localhost:5000
```

If port 5000 is already in use on your machine, you can instead run:

```bash
npx next dev -p 3000 -H 0.0.0.0
```

and open:

```text
http://localhost:3000
```

### 5. Using the app

- From the landing page, click **“Open app”** in the top‑right.
- On the **Dashboard**, follow the quick‑start steps and click **Live Captions**.
- Grant microphone access in your browser when prompted.
- Press **Space** to start/stop listening, and **Ctrl/Cmd + S** to save a session.

