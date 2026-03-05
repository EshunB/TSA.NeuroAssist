# NeuroAssist – The Dashboard for Live Captions for Hearing-Impaired

NeuroAssist is a web dashboard intended to provide real time speech to text captions for hearing impaired users. NeuroAssist works right on your laptop to make everyday listening a little easier.

## Features

- **Live Speech to Text Captions** – NeuroAssist provides real time captions for hearing impaired users using the Web Speech API.
- **Transcript Management** – NeuroAssist allows you to save, search, and export caption sessions.
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
git clone https://github.com/EshunB/TSA.NeuroAssist.git
cd TSA.NeuroAssist

# Install the dependencies on your laptop.
npm install

# Setup the platform database.
npm run db:push
npm run db:seed

# Start the platform development.
npm run dev
