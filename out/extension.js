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
function generateRoast(code) {
    if (/while\s*\(\s*true\s*\)/.test(code)) {
        return '🔥 Infinite loop detected! Congrats, you made a black hole!';
    }
    else if (/console\.log\(\s*["\']Hello World["\']\s*\)/.test(code)) {
        return 'Baby’s first code 🤱';
    }
    else if (/;\s*$/.test(code) === false) {
        return 'Syntax error! Why can’t you just be normal? 🤯';
    }
    else if (/\bvar x\b/.test(code)) {
        return 'Wow, so creative. Did you also name your dog "Dog"? 🐶';
    }
    return 'Code looks okay… for now 😏';
}
//# sourceMappingURL=extension.js.map