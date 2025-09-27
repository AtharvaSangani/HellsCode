import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
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

export function deactivate() {}

function generateRoast(code: string): string {
    if (/while\s*\(\s*true\s*\)/.test(code)) {
        return '🔥 Infinite loop detected! Congrats, you made a black hole!';
    } else if (/console\.log\(\s*["\']Hello World["\']\s*\)/.test(code)) {
        return 'Baby’s first code 🤱';
    } else if (/;\s*$/.test(code) === false) {
        return 'Syntax error! Why can’t you just be normal? 🤯';
    } else if (/\bvar x\b/.test(code)) {
        return 'Wow, so creative. Did you also name your dog "Dog"? 🐶';
    }
    return 'Code looks okay… for now 😏';
}
