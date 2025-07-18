// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";

// Command identifier constant
const COPY_WITH_CONTEXT_CMD = "vscode-ai-context-provider.copyWithContext";

// Function to get markdown language identifier from file extension
function getMarkdownLanguage(fileName: string): string {
  const ext = fileName.split(".").pop()?.toLowerCase();
  return ext ?? "";
}

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  // Register the copyWithContext command
  const disposable = vscode.commands.registerCommand(
    COPY_WITH_CONTEXT_CMD,
    () => {
      // Get the active text editor
      const editor = vscode.window.activeTextEditor;

      // Validate that we have an active editor
      if (!editor) {
        vscode.window.showErrorMessage("No active editor found");
        return;
      }

      // Get the current selection
      const selection = editor.selection;

      // If no selection, use the entire document
      const textSelection = selection.isEmpty
        ? new vscode.Range(
            0,
            0,
            editor.document.lineCount - 1,
            editor.document.lineAt(editor.document.lineCount - 1).text.length
          )
        : selection;

      // Determine start and end lines (1-based)
      const startLine = textSelection.start.line + 1;
      const endLine = textSelection.end.line + 1;

      // Compute the relative path
      const relPath = vscode.workspace.asRelativePath(editor.document.uri);

      // Extract the selected text
      const code = editor.document.getText(textSelection);

      // Get the language for markdown syntax highlighting
      const fileName = editor.document.fileName;
      const language = getMarkdownLanguage(fileName);

      // Compose the final string with markdown syntax
      const contextString = `${relPath}:${startLine}-${endLine}\n\`\`\`${language}\n${code}\n\`\`\``;

      // Copy to clipboard
      vscode.env.clipboard.writeText(contextString);

      // Show success message
      vscode.window.setStatusBarMessage("Copied AI context!", 3000);
    }
  );

  context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() {}
