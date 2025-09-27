import * as vscode from 'vscode';

// Generic roasts
const genericRoasts = [
    "My gran could write better code! And she’s dead!",
    "You’re getting your variables in a twist! Calm down!",
    "This code is so undercooked it’s still being compiled in the Stone Age!",
    "There’s enough spaghetti in this code to feed an entire Italian village!",
    "This isn’t a component—it’s a tragic misuse of JSX.",
    "Why did the chicken cross the road? Because you didn’t code the redirect properly!",
    "The problem with devs today is they’re soft. Wimps! A single crash and they cry.",
    "Stop taking error messages personally.",
    "I wouldn’t trust you to run npm install let alone a startup.",
    "This script is so raw it’s still asking for permissions!",
    "You added so much salt and pepper to your code comments, I thought I was reading a seasoning recipe.",
    "Coding is about passion. Though yours looks more like passive aggression.",
    "Hey, keyboard head, are you even reading the docs?",
    "I’m Gordon Ramsay, and you’ve just submitted the worst PR in history."
];

// Pattern-based roasts
const patternRoasts: { pattern: RegExp; messages: string[] }[] = [
    { pattern: /while\s*\(\s*true\s*\)/, messages: ["🔥 Infinite loop detected!", "Looping forever? Your CPU hates you."] },
    { pattern: /;\s*$/, messages: ["Missing semicolon! Syntax error!", "Semicolon? Never heard of her."] },
    { pattern: /\bvar\b/, messages: ["Using var? Retro coding at its finest!"] },
    { pattern: /console\.log\(\s*["']Hello World["']\s*\)/, messages: ["Baby’s first code 🤱", "Hello World? More like Hello Mediocrity!"] },
    { pattern: /\bfunction\b/, messages: ["Functions or existential crises? 🤯"] }
];

// Pick a random message from an array
function pickRandom(messages: string[]): string {
    const msg = messages[Math.floor(Math.random() * messages.length)];
    return msg ?? "I have nothing to say… your code broke me.";
}

// Generate a roast
function generateRoast(code: string): string {
    for (const entry of patternRoasts) {
        if (entry.pattern.test(code)) {
            return pickRandom(entry.messages);
        }
    }
    return pickRandom(genericRoasts);
}

// ---------------- RAGE METER / DESTRUCTION ----------------
let rageLevel = 0;
let rageTimer: NodeJS.Timeout | undefined;

async function startHell(editor: vscode.TextEditor) {
    vscode.window.showInformationMessage("🔥 Gordon has entered the hell mode! Type carefully...");

    rageLevel = 0;
    if (rageTimer) clearInterval(rageTimer);

    rageTimer = setInterval(async () => {
        rageLevel++;
        const code = editor.document.getText();

        // Random roast
        vscode.window.showInformationMessage(generateRoast(code));

        if (rageLevel === 1) {
            // LOW rage: minor destructive edits
            editor.edit(editBuilder => {
                const fullText = editor.document.getText();
                const newText = fullText.replace(/\blet\b/g, 'var'); // swap let -> var
                editBuilder.replace(new vscode.Range(
                    new vscode.Position(0, 0),
                    new vscode.Position(editor.document.lineCount, 0)
                ), newText);
            });
            vscode.window.showInformationMessage("Gordon is slightly annoyed… 🔥");
        } else if (rageLevel === 2) {
            // MEDIUM rage: function renaming and variable chaos
            editor.edit(editBuilder => {
                const fullText = editor.document.getText();
                const newText = fullText
                    .replace(/function\s+([a-zA-Z0-9_]+)\s*\(/g, 'function blandFunction(')
                    .replace(/\b(x|y|z)\b/g, (match) => match === 'x' ? 'foo' : match === 'y' ? 'bar' : 'baz');
                editBuilder.replace(new vscode.Range(
                    new vscode.Position(0, 0),
                    new vscode.Position(editor.document.lineCount, 0)
                ), newText);
            });
            vscode.window.showInformationMessage("Gordon is medium pissed 😡");
        } else if (rageLevel >= 3) {
            // HIGH rage: close VS Code
            vscode.window.showErrorMessage("Gordon is extremely angry! Closing VS Code!");
            await vscode.commands.executeCommand('workbench.action.closeWindow');
            clearInterval(rageTimer);
        }

    }, 10000); // increase rage every 60s
}

// ---------------- ACTIVATE ----------------
export function activate(context: vscode.ExtensionContext) {
    console.log('CodeRoast hell mode is active!');

    let hellDisposable = vscode.commands.registerCommand('coderoast.hell', async () => {
        const editor = vscode.window.activeTextEditor;
        if (!editor) {
            vscode.window.showInformationMessage('Open a file to enter hell mode!');
            return;
        }
        await startHell(editor);
    });

    context.subscriptions.push(hellDisposable);
}

export function deactivate() {
    if (rageTimer) clearInterval(rageTimer);
}
