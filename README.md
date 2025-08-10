# 📝 Todo App with Dark Mode

A modern, responsive Todo List application built using HTML, CSS, and JavaScript, featuring light/dark theme toggle, task filtering, and interactive UI animations.

## 📌 Features
- Add, edit, and delete tasks
- Mark tasks as completed
- Filter tasks (All / Active / Completed)
- Save tasks in localStorage
- Animated task addition/removal
- Light/Dark theme switch with smooth transitions
- Responsive design for mobile & desktop
- Custom scrollbars and focus styles for accessibility

## 🛠 Tech Stack
- **HTML5** – Structure
- **CSS3** – Styling, CSS Variables, Responsive Design
- **JavaScript (ES6)** – DOM Manipulation, Event Handling
- **CSS Animations** – Smooth UI transitions

## 📂 Folder Structure
project/
│── index.html # Main HTML file
│── style.css # Main CSS file
│── script.js # JavaScript logic
│── assets/ # (Optional) icons/images
│── README.md # Documentation


## � How to Use
1. Clone or download the project
2. Open `index.html` in a browser
3. Add a task using the input field
4. Click the theme toggle button to switch between light and dark mode
5. Use filter buttons to sort tasks
6. Click on a task's checkbox to mark it complete

## 🏗 Code Explanation

### 1. HTML
- **Header**: Contains app title and theme toggle button
- **Input Section**: Text input + Add button
- **Filters**: Buttons to filter tasks
- **Todo List**: Dynamic list populated via JS
- **Stats**: Shows total, completed, remaining tasks

### 2. CSS
- **CSS Variables**: Define colors, shadows, and radius in `:root` for light mode and override in `.dark-mode`
- **Dark Mode Styling**: `.dark-mode` changes `--background`, `--text-primary`, etc.
- **Animations**: `@keyframes slideIn` & `slideOut` for task transitions
- **Responsive Rules**: `@media (max-width: 640px)` for mobile UI optimization

### 3. JavaScript
- **State Management**: Tasks stored in an array and in localStorage for persistence
- **Functions**:
  - `addTodo()` → Add new task
  - `toggleTodo(id)` → Mark as completed/uncompleted
  - `editTodo(id)` → Edit task text
  - `deleteTodo(id)` → Remove task
  - `filterTodos(filter)` → Show filtered tasks
  - `updateStats()` → Update total/active/completed counts
- **Theme Toggle**:
  - Save selected theme to localStorage
  - Apply theme on page load

## 🌗 Dark Mode Implementation
CSS Variables make theme switching instant:

```css
:root {
  --background: #ffffff;
  --text-primary: #1e293b;
}

.dark-mode {
  --background: #0f172a;
  --text-primary: #f1f5f9;
}
```
## JavaScript toggles the .dark-mode class on <body>:

```js
function toggleTheme() {
    const body = document.body;
    body.classList.toggle('dark-mode');
    localStorage.setItem('theme', body.classList.contains('dark-mode') ? 'dark' : 'light');
}
```

## HTML/CSS/JS Elements Table

| Element / Feature   | Language | Purpose                           |
|---------------------|----------|-----------------------------------|
| `<header>`          | HTML     | Page title & theme button         |
| `<input>`           | HTML     | Task entry field                  |
| `<button>`          | HTML     | Actions (add, filter, delete)     |
| `.container`        | CSS      | Layout container                  |
| `:root`             | CSS      | Global variables                  |
| `.dark-mode`        | CSS      | Dark theme overrides              |
| `@keyframes`        | CSS      | Animations                        |
| `querySelector`     | JS       | DOM element selection             |
| `addEventListener`  | JS       | Event handling                    |
| `classList.toggle`  | JS       | Add/remove class                  |
| `forEach`           | JS       | Loop through tasks                |


## 🗂 Wireframe (Minimal)
+--------------------------------------------------+
|  Todo App                        [☀/🌙 Toggle]  |
+--------------------------------------------------+
|  [ Enter new task...         ][ Add Task ]       |
+--------------------------------------------------+
|  [All] [Active] [Completed]                     |
+--------------------------------------------------+
|  ☐ Task 1              [Edit] [Delete]          |
|  ☑ Task 2 (done)       [Edit] [Delete]          |
|  ☐ Task 3              [Edit] [Delete]          |
+--------------------------------------------------+
|  Total: 3   Completed: 1   Remaining: 2         |
+--------------------------------------------------+

## 📜 License

   This project is open-source and free to use.
   

