CodeRoast – Gordon Ramsay Mode for VS Code 🍳🔥
Ever wondered what it feels like to have Gordon Ramsay reviewing your code? CodeRoast brings a “hell mode” to your VS Code editor, roasting your code in real-time and escalating chaos as you type. Perfect for laughs, stress-testing, or just a spicy coding experience.
Features:
Random Gordon-style roasts for your code.
Pattern-based insults for common coding mistakes (while(true), var, missing semicolons, etc.).
Rage Meter:
Level 1 (LOW): Minor destructive edits & function/variable chaos.
Level 2 (MEDIUM): Comments insertion + more chaos.
Level 3 (HIGH): VS Code warning & automatic closure after 10s.
Timed insults every 3–5 seconds for that relentless Gordon feel.
Optional voice readout (macOS, Windows, Linux supported) for immersive experience.
Requirements:
Visual Studio Code (latest stable recommended)
Node.js installed (v16+ recommended)
Platform-specific TTS support:
macOS: say command (built-in)
Windows: PowerShell Speech API (Microsoft George voice recommended)
Linux: espeak installed (sudo apt install espeak)
Installation:
Clone the repository:
git clone https://github.com/yourusername/coderoast.git
cd coderoast
Open the project in VS Code:
code .
Install dependencies (if any):
npm install
Build the extension (if using TypeScript):
npm run compile
Run the extension: Press F5 in VS Code to launch a new Extension Development Host window.
Usage:
Open any code file in the Extension Development Host window.
Open the Command Palette (Ctrl+Shift+P or Cmd+Shift+P on macOS).
Search for CodeRoast: Hell Mode and run it.
Observe Gordon escalate:
Roasts appear every few seconds.
Functions/variables may get renamed.
Comments may get inserted.
Eventually, VS Code warns and closes if rage hits maximum.
⚠️ Important: This is intentionally destructive! Save your work before activating hell mode.
Demo Script (3-minute run-through):
Open a dummy file (e.g., demo.js) with sample code:
function test(x, y, z) {
    console.log("Hello World");
    while(true) {}
}
Activate Hell Mode from the Command Palette.
Watch Gordon’s behavior escalate:
Level 1 (LOW): Functions and variables are renamed.
Level 2 (MEDIUM): Roasts are inserted as comments.
Level 3 (HIGH): Warning appears, VS Code closes after ~10 seconds.
Voice mode will read the insults aloud if your platform supports it.
Tip: Set the initial schedule to 5–10 seconds so the full demo completes in ~3 minutes.
Voice Support:
macOS: Uses built-in say command. British voices like Daniel recommended.
Windows: Uses PowerShell System.Speech API. Recommended voice: Microsoft George.
Linux: Uses espeak with UK English (-v en-uk).
The extension automatically detects your platform and speaks the roasts aloud.
Configuration (Optional):
Currently, all settings are hardcoded. Possible future improvements:
Toggle voice on/off.
Adjust roast frequency.
Control rage escalation speed.
Choose which types of destructive edits occur.