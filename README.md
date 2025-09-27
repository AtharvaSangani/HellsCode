# CodeRoast – Gordon Ramsay Mode for VS Code 🍳🔥

![VS Code Extension](https://img.shields.io/badge/VS%20Code-Extension-blue)
![Node.js](https://img.shields.io/badge/Node.js-v16%2B-green)
![License](https://img.shields.io/badge/License-MIT-yellow)

Ever wondered what it feels like to have **Gordon Ramsay reviewing your code**?  
**CodeRoast** brings a “hell mode” to your VS Code editor, roasting your code in real-time and escalating chaos as you type. Perfect for laughs, stress-testing, or just a spicy coding experience.

---

## Features

- Random **Gordon-style roasts** for your code.
- **Pattern-based insults** for common coding mistakes (`while(true)`, `var`, missing semicolons, etc.).
- **Rage Meter**:
  - **Level 1 (LOW)**: Minor destructive edits & function/variable chaos.
  - **Level 2 (MEDIUM)**: Comments insertion + more chaos.
  - **Level 3 (HIGH)**: VS Code warning & automatic closure after 10s.
- Timed insults every 3–5 seconds for that relentless Gordon feel.
- Optional **voice readout** (macOS, Windows, Linux supported) for immersive experience.

---

## Requirements

- [Visual Studio Code](https://code.visualstudio.com/) (latest stable recommended)
- [Node.js](https://nodejs.org/) installed (v16+ recommended)
- Platform-specific TTS support:
  - **macOS**: `say` command (built-in)
  - **Windows**: PowerShell Speech API (`Microsoft George` voice recommended)
  - **Linux**: `espeak` installed (`sudo apt install espeak`)

---

## Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/coderoast.git
cd coderoast

# Open project in VS Code
code .

# Install dependencies
npm install

# Build the extension (if using TypeScript)
npm run compile
