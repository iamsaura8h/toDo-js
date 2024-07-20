# To-Do App

A simple To-Do application where you can add tasks, mark them as complete, and remove them. The app uses local storage to save and load tasks.

## Features

- **Add Tasks**: Enter a task in the input field and click "Add" to add it to the list.
- **Mark Tasks as Complete**: Click on a task to toggle its completion status.
- **Remove Tasks**: Click the "×" button on a task to remove it from the list.
- **Local Storage**: Tasks are saved in the browser's local storage so that they persist across page reloads.

## Files

- `index.html`: The HTML structure of the app.
- `style.css`: The styling for the app.
- `script.js`: The JavaScript code for adding, removing, and saving tasks.

## Installation

1. **Clone the Repository**:

    ```bash
    git clone https://github.com/your-username/todo-app.git
    ```

2. **Navigate to the Project Directory**:

    ```bash
    cd todo-app
    ```

3. **Open `index.html` in a Web Browser**:

    Simply open the `index.html` file in your preferred web browser to see the app in action.

## Usage

1. **Adding a Task**:
   - Enter your task in the input field.
   - Click the "Add" button to add it to the list.

2. **Marking a Task as Complete**:
   - Click on the task text to toggle its completion status (strikethrough).

3. **Removing a Task**:
   - Click the "×" button next to the task to remove it from the list.

## Code Explanation

### HTML (`index.html`)

The HTML file contains a simple structure for the To-Do App, including an input field, a button to add tasks, and an unordered list (`<ul>`) to display tasks.

### CSS (`style.css`)

The CSS file styles the To-Do App, including the layout, buttons, and task items. It also includes styles for task completion and hover effects.

### JavaScript (`script.js`)

The JavaScript file manages the app's functionality:

- **Add Task**: Creates a new list item and appends it to the list.
- **Mark Task as Complete**: Toggles a class on the task item when clicked.
- **Remove Task**: Removes the task item when the "×" button is clicked.
- **Save and Show Data**: Uses local storage to save tasks and reload them when the page is refreshed.

```javascript
const ib = document.getElementById("input-box");
const lc = document.getElementById("listContainer");

function addTask() {
    if (ib.value === '') {
        alert("write something");
    } else {
        let li = document.createElement("li");
        li.innerHTML = ib.value;
        lc.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    ib.value = "";
    saveData();
}

lc.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData() {
    localStorage.setItem("data", lc.innerHTML);
}

function showData() {
    lc.innerHTML = localStorage.getItem("data");
}

showData();
```
### Contributing
Feel free to open issues or submit pull requests if you'd like to contribute to the project!
