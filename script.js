function welcomeUser() {
    // Find the element with the id 'main-title'
    const title = document.getElementById('main-title');
    
    // Change its text content
    title.textContent = "You clicked the button!";
    
    // Change its color using JS
    title.style.color = "red";
}

// This function changes the text to red
function welcomeUser() {
    const title = document.getElementById('main-title');
    title.textContent = "You clicked the button!";
    title.style.color = "red";
    console.log("Success! The function executed perfectly.");
}

// This function resets everything back to normal
function resetPage() {
    const title = document.getElementById('main-title');
    title.textContent = "Hello World!"; // The original text
    title.style.color = "darkblue";     // The original color from your CSS
}

function welcomeUser() {
    // 1. Find the heading and the input box
    const title = document.getElementById('main-title');
    const nameInput = document.getElementById('user-name');
    
    // 2. Get the specific value typed into the box
    const name = nameInput.value;

    // 3. Check if the user actually typed something
    if (name === "") {
        title.textContent = "Please enter a name!";
        title.style.color = "orange";
    } else {
        title.textContent = "Hello, " + name + "!";
        title.style.color = "green";
    }
}

function liveUpdate() {
    const title = document.getElementById('main-title');
    const nameInput = document.getElementById('user-name');
    
    if (nameInput.value !== "") {
        title.textContent = "Hello " + nameInput.value;
        title.style.color = "purple";
    } else {
        title.textContent = "Hello World!";
        title.style.color = "darkblue";
    }
}

let count = 0; // This variable lives outside the functions so it doesn't reset

function welcomeUser() {
    const title = document.getElementById('main-title');
    const nameInput = document.getElementById('user-name');
    const countDisplay = document.getElementById('click-count');

    // Update Counter
    count = count + 1;
    countDisplay.textContent = count;

    // Greeting Logic
    if (nameInput.value !== "") {
        title.textContent = "Hello, " + nameInput.value + "!";
        title.style.color = "green";
    }
}

function changeBg() {
    const color = document.getElementById('bg-picker').value;
    document.body.style.backgroundColor = color;
}

function toggleDarkMode() {
    // This 'toggles' a CSS class on the body
    document.body.classList.toggle("dark-mode");
}

// 1. Load tasks from localStorage as soon as the app starts
let tasks = JSON.parse(localStorage.getItem("myTasks")) || [];
renderTasks();

function addTask() {
    const input = document.getElementById('todo-input');
    const newTask = input.value;

    if (newTask === "") return; // Don't add empty tasks

    tasks.push(newTask); // Add to our array
    input.value = "";    // Clear input
    
    saveAndRefresh();
}

function saveAndRefresh() {
    // 2. Save the updated array to localStorage
    localStorage.setItem("myTasks", JSON.stringify(tasks));
    renderTasks();
}

function renderTasks() {
    const list = document.getElementById('todo-list');
    list.innerHTML = ""; // Clear the list before redrawing

    // 3. Loop through the array and create HTML for each task
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            ${task} 
            <button onclick="deleteTask(${index})">Delete</button>
        `;
        list.appendChild(li);
    });
}

function deleteTask(index) {
    tasks.splice(index, 1); // Remove 1 item at the specific index
    saveAndRefresh();
}