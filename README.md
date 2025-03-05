# Calculator using Electron with React

## Introduction
This is a simple **Calculator Application** built using **Electron.js** and **React.js**. The primary purpose of this project is to learn and explore **Electron.js** for building cross-platform desktop applications combined with React for the user interface.

## Tech Stack
- **Electron.js**: For creating desktop applications.
- **React.js**: For building dynamic user interfaces.
- **TypeScript**: For static typing and better code quality.
- **Tailwind CSS**: For modern styling.
- **Electron-Window-State**: To persist window size and position.

## Installation
Follow these steps to set up the project on your local machine.

### 1. Clone the Repository
```bash
git clone https://github.com/priyanshutariyal02/Calculator-Electron-js.git
cd Calculator-Electron-js
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Install Tailwind CSS (Optional, for styling)
```bash
npm install -D tailwindcss@3
```

### 4. Initialize Tailwind CSS
```bash
npx tailwindcss init
```

### 5. Configure Tailwind CSS
Modify the `tailwind.config.js` file:

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx,tsx}'],
  theme: {
    extend: {}
  },
  plugins: []
}
```

## PostCSS Configuration
Create a `.postcssrc` file in the project's root directory and add the following configuration:

```json
{
  "plugins": {
    "tailwindcss": {},
    "autoprefixer": {}
  }
}
```

## Electron Window State Management (Optional)
To persist and restore window size and position, install `electron-window-state`:

```bash
npm install electron-window-state
```

### Usage
Modify your Electron main process file to include the window state manager:

```javascript
import windowStateKeeper from 'electron-window-state'
import { app, BrowserWindow } from 'electron'

let win

app.on('ready', () => {
  // Load the previous state or set default dimensions
  let mainWindowState = windowStateKeeper({
    defaultWidth: 1000,
    defaultHeight: 800
  })

  // Create the browser window using saved state dimensions
  win = new BrowserWindow({
    x: mainWindowState.x,
    y: mainWindowState.y,
    width: mainWindowState.width,
    height: mainWindowState.height,
    webPreferences: {
      nodeIntegration: true
    }
  })

  // Manage the window state
  mainWindowState.manage(win)
})
```

## Features
- Basic Calculator Functionality (Addition, Subtraction, Multiplication, Division)
- Persistent Window State
- Modern UI with Tailwind CSS
- Cross-Platform Compatibility

## How to Run the App
```bash
npm run dev
```

## Purpose of Project
This project was created solely for **learning purposes** to understand how **Electron.js** works with **React.js** and how to build desktop applications using these technologies.

---

## Output
![Screenshot 2025-03-05 134333](https://github.com/user-attachments/assets/b730b37e-8f7c-4bde-aba4-e2cb18abd031) ![Screenshot 2025-03-05 134359](https://github.com/user-attachments/assets/05b2a564-6cf1-4f12-b6fd-3afddc73f92b)


Made by Priyanshu Tariyal
