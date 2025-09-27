import * as vscode from 'vscode';

// Generic roasts
const genericRoasts = [
    "My gran could write better code! And she’s dead!",
    "For what we are about to debug, may the Lord make us truly not vomit.",
    "You’re getting your variables in a twist! Calm down!",
    "This code is so undercooked it’s still being compiled in the Stone Age!",
    "This repo is so disgusting, if you push it to GitHub, you’ll get banned.",
    "There’s enough spaghetti in this code to feed an entire Italian village!",
    "This is a tough decision... because all your commits are crap.",
    "This isn’t a component—it’s a tragic misuse of JSX.",
    "Why did the chicken cross the road? Because you didn’t code the redirect properly!",
    "You put so much JavaScript in this, it’s basically a Weasley.",
    "The problem with devs today is they’re soft. Wimps! A single crash and they cry.",
    "Don’t just stand there like a big, blinking cursor!",
    "If I can give you one strong piece of advice: never accept the ‘Senior Developer’ title after one CodeCrafters course.",
    "If I stopped yelling at your code, I’d probably die.",
    "Stop taking error messages personally.",
    "I wouldn’t trust you to run npm install let alone a startup.",
    "I am what I am. A fighter... and apparently your unpaid QA.",
    "This script is so raw it’s still asking for permissions!",
    "Want to be a great dev? Work with great devs. Not that clown who said jQuery is the future.",
    "You added so much salt and pepper to your code comments, I thought I was reading a seasoning recipe.",
    "Let your work do the talking. Not your Medium blog full of buzzwords.",
    "The moment you start copy-pasting Stack Overflow answers without understanding them... game over.",
    "Coding is about passion. Though yours looks more like passive aggression.",
    "Developers are nutters. Self-obsessed, insecure, delusional keyboard psychopaths.",
    "I act on instinct. Unlike your function, which doesn’t do anything.",
    "I think pressure is healthy. But your code under pressure? It folds like wet spaghetti.",
    "You don’t start coding to get rich. You do it to cry over null pointer exceptions.",
    "Hey, keyboard head, are you even reading the docs?",
    "I’m Gordon Ramsay, and you’ve just submitted the worst PR in history.",
    "Swearing is dev language. Just ask any backend dev after a deploy."
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
    vscode.window.showInformationMessage("🔥 Gordon has entered the hell mode! Type carefully...", { modal: true });

    rageLevel = 0;
    let roastTimer: NodeJS.Timeout | undefined;

    const scheduleRage = (delay: number) => {
        roastTimer = setTimeout(async function tick() {
            rageLevel++;
            const fullText = editor.document.getText();

            // Show a roast (modal for readability)
            vscode.window.showInformationMessage(generateRoast(fullText), { modal: true });

            if (rageLevel === 1) {
                // LOW rage: minor destructive edits + function/variable chaos
                editor.edit(editBuilder => {
                    let newText = fullText
                        // Rename functions
                        .replace(/function\s+([a-zA-Z0-9_]+)\s*\(/g, 'function blandFunction(')
                        // Chaos for x, y, z
                        .replace(/\b(x|y|z)\b/g, (match) => match === 'x' ? 'you_freckin_donkey' 
                                                               : match === 'y' ? 'you_code_like_old_people_freck' 
                                                               : 'you_should_quit_coding');
            
                    editBuilder.replace(new vscode.Range(
                        new vscode.Position(0, 0),
                        new vscode.Position(editor.document.lineCount, 0)
                    ), newText);
                });
            
                vscode.window.showInformationMessage("Gordon is slightly annoyed… 🔥", { modal: true });
            
                // Schedule next rage increment slower than first roast
                scheduleRage(20000); // next after 15s
            } else if (rageLevel === 2) {
                // MEDIUM rage: function renaming, variable chaos + comments
                editor.edit(editBuilder => {
                    let newText = fullText
                        .replace(/function\s+([a-zA-Z0-9_]+)\s*\(/g, 'function blandFunction(')
                        .replace(/\b(x|y|z)\b/g, (match) => match === 'x' ? 'you_freckin_donkey' : match === 'y' ? 'you_code_like_old_people_freck' : 'you_should_quit_coding');

                    const lines = newText.split('\n');
                    const numComments = 5 + Math.floor(Math.random() * 6);
                    for (let i = 0; i < numComments; i++) {
                        const lineIndex = Math.floor(Math.random() * lines.length);
                        const roastComment = `# ${generateRoast(newText)}`;
                        lines.splice(lineIndex, 0, roastComment);
                    }
                    newText = lines.join('\n');

                    editBuilder.replace(new vscode.Range(
                        new vscode.Position(0, 0),
                        new vscode.Position(editor.document.lineCount, 0)
                    ), newText);
                });
                vscode.window.showInformationMessage("Gordon is medium pissed 😡 and leaving his mark!", { modal: true });

                // Schedule next rage increment slower than previous
                scheduleRage(50000); // next after 25s
            } else if (rageLevel >= 3) {
                // HIGH rage: show warning first
    vscode.window.showErrorMessage("Gordon is extremely angry! Closing VS Code in a few seconds...", { modal: true });

    // Wait 5 seconds before closing
    await new Promise(resolve => setTimeout(resolve, 10000));

    await vscode.commands.executeCommand('workbench.action.closeWindow');
    return; // stop scheduling
            }

            // Show a quick roast every 3–5 seconds while waiting for rage
            const quickRoastInterval = setInterval(() => {
                vscode.window.showInformationMessage(generateRoast(fullText), { modal: true });
            }, 7000 + Math.floor(Math.random() * 2000));

            // Clear quick roast interval when rage changes
            setTimeout(() => clearInterval(quickRoastInterval), delay);

        }, delay);
    };

    scheduleRage(5000); // start first rage after 5s
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
