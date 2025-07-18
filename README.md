# VSCode AI Context Provider

A Visual Studio Code extension that helps you copy code with AI-friendly context, including file paths and line numbers. Perfect for when you need to share code snippets with AI assistants like ChatGPT, Claude, or Copilot.

## Features

✨ **Copy as AI Context**: Copies your selected code (or entire file) with contextual information that AI assistants love:
- File path relative to your workspace
- Line number ranges
- Clean, formatted code
- **Automatic markdown syntax highlighting** based on file extension
- Supports 40+ programming languages and file types

### Example Output
```
src/components/Button.tsx:15-25
```tsx
export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  onClick 
}) => {
  return (
    <button 
      className={`btn btn-${variant}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
```
```

## Usage

### Method 1: Keyboard Shortcuts
- **macOS**: `Cmd+Shift+C`
- **Windows/Linux**: `Ctrl+Shift+C`

### Method 2: Context Menu
1. Select the code you want to copy
2. Right-click to open the context menu
3. Choose "Copy as AI Context"

### Method 3: Command Palette
1. Open Command Palette (`Cmd+Shift+P` / `Ctrl+Shift+P`)
2. Type "Copy as AI Context"
3. Press Enter

## How It Works

- **With Selection**: Copies the selected code with its line numbers
- **Without Selection**: Copies the entire file content
- **Context Format**: `filepath:startLine-endLine\ncode`
- **Clipboard Ready**: Automatically copies to your clipboard

## Requirements

- Visual Studio Code 1.102.0 or higher
- No additional dependencies required

## Extension Settings

This extension doesn't add any custom settings. It works out of the box!

## Known Issues

No known issues at this time. If you encounter any problems, please [report them on GitHub](https://github.com/your-username/vscode-ai-context-provider/issues).

## Release Notes

### 0.1.0

🎉 Initial release of VSCode AI Context Provider!

**Features:**
- Copy code with AI-friendly context formatting
- Support for keyboard shortcuts (Cmd+Shift+C / Ctrl+Shift+C)
- Context menu integration
- Works with selections or entire files
- Clean, formatted output with file paths and line numbers
- Automatic markdown syntax highlighting for 40+ programming languages
- Perfect for sharing code with AI assistants

---

## Following extension guidelines

Ensure that you've read through the extensions guidelines and follow the best practices for creating your extension.

* [Extension Guidelines](https://code.visualstudio.com/api/references/extension-guidelines)

## Working with Markdown

You can author your README using Visual Studio Code. Here are some useful editor keyboard shortcuts:

* Split the editor (`Cmd+\` on macOS or `Ctrl+\` on Windows and Linux).
* Toggle preview (`Shift+Cmd+V` on macOS or `Shift+Ctrl+V` on Windows and Linux).
* Press `Ctrl+Space` (Windows, Linux, macOS) to see a list of Markdown snippets.

## For more information

* [Visual Studio Code's Markdown Support](http://code.visualstudio.com/docs/languages/markdown)
* [Markdown Syntax Reference](https://help.github.com/articles/markdown-basics/)

**Enjoy!**
