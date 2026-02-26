# NeuroAssist – Live Captions & Translation for the Hearing-Impaired

A modern web application providing real-time speech-to-text captions and live translation for hearing-impaired users.

## 🎯 Features

- 🎙️ **Live Speech-to-Text** – Real-time captions using Web Speech API
- 🌐 **Live Translation** – Instant translation into 10+ languages  
- 💾 **Transcript Management** – Save, search, tag, and export sessions
- ♿ **WCAG Accessible** – Built with accessibility-first design
- 📱 **Responsive** – Works on laptop, tablet, and desktop
- 🔒 **Privacy First** – Local-only mode available

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- A modern browser (Chrome, Edge, or Safari)

### Setup

```bash
# Clone the repo
git clone https://github.com/YOUR_USERNAME/neuroassist.git
cd neuroassist

# Install dependencies
npm install

# Setup database
npm run db:push
npm run db:seed

# Start development
npm run dev