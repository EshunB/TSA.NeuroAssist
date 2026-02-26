# NeuroAssist – The Dashboard for Live Captions & Translation for Hearing-Impaired

NeuroAssist is a web dashboard intended to provide real time speech to text captions and live translations for hearing impred users. NeuroAssist works right on your laptop, in an aim to help make life easier for you.

## Features

- **Live Speech to Text Captions** – NeuroAssist provides real time captions for hearing impaired using Web Speech API.
- **Real Time Translations** – NeuroAssist gives instant translation into 10+ languages right on the web.
- **Transcript Management** – NeuroAssist allows you to save, search, tag, and export translate and caption sessions.
- **WCAG Accessible** – NeuroAssist was built with an accessibility-first design in mind.
- **Responsive Focused** – NeuroAssist works on laptop, tablet, and desktop devices. 
- **Focused on Privacy First** – NeuroAssist has a Local-only mode available, keeping your safety in mind.

## Set Up

### Prerequisites Needed for NeuroAssist
- Node.js 18+
- A modern browser (Chrome, Edge, or Safari)

### Setup

```bash
# Open your laptops terminal. 

# Clone the GitHub Repository.
git clone https://github.com/EshunB/SoftwareDevelopment.git
cd neuroassist

# Install the dependencies on your laptop.
npm install

# Setup the platform database.
npm run db:push
npm run db:seed

# Start the platform development.
npm run dev
