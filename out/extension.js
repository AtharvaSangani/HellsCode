"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = activate;
exports.deactivate = deactivate;
const vscode = __importStar(require("vscode"));
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
    "If I can give you one strong piece of advice: never accept the ‘Senior Developer’ title after one Udemy course.",
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
const patternRoasts = [
    {
        pattern: /while\s*\(\s*true\s*\)/,
        messages: [
            "🔥 Infinite loop detected! Congrats, you made a black hole!",
            "Looping forever? You’re practically immortal now!",
            "Watch out! Your CPU called me crying."
        ]
    },
    {
        pattern: /;\s*$/,
        messages: [
            "Missing semicolon! Syntax error! Why can’t you just be normal? 🤯",
            "Semicolon? Never heard of her.",
            "No semicolon, no mercy. 🔥"
        ]
    },
    {
        pattern: /\bvar\b/,
        messages: [
            "Wow, using var? Retro coding at its finest! 🕰️",
            "Var? You’re a walking time machine to 1995!",
            "Variables declared like it’s 1999. Amazing."
        ]
    },
    {
        pattern: /console\.log\(\s*["']Hello World["']\s*\)/,
        messages: [
            "Baby’s first code 🤱",
            "Congratulations, you just printed the world’s most boring text.",
            "Hello World? More like Hello Mediocrity!"
        ]
    },
    {
        pattern: /\bfunction\b/,
        messages: [
            "Function? More like confusion. 🤯",
            "Your functions are so lost they need GPS.",
            "Are these functions or existential crises?"
        ]
    }
];
// Pick a random message from an array
function pickRandom(messages) {
    const msg = messages[Math.floor(Math.random() * messages.length)];
    return msg ?? "I have nothing to say… your code broke me.";
}
// Generate a roast
function generateRoast(code) {
    // Check patterns first
    for (const entry of patternRoasts) {
        if (entry.pattern.test(code)) {
            return pickRandom(entry.messages);
        }
    }
    // If no patterns matched, return a random generic roast
    return pickRandom(genericRoasts);
}
function activate(context) {
    console.log('CodeRoast extension is now active!');
    let disposable = vscode.commands.registerCommand('coderoast.roastCode', () => {
        const editor = vscode.window.activeTextEditor;
        if (!editor) {
            vscode.window.showInformationMessage('Open a file to roast your code!');
            return;
        }
        const code = editor.document.getText();
        const roast = generateRoast(code);
        vscode.window.showInformationMessage(roast);
    });
    context.subscriptions.push(disposable);
}
function deactivate() { }
//# sourceMappingURL=extension.js.map