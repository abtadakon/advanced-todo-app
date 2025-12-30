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

async function getQuote() {
    const response = await fetch("https://api.quotable.io/random");
    const data = await response.json();
    console.log(data.content); // This logs a random quote to your console!
}

async function getQuote() {
    try {
        // 1. Request data from the API
        const response = await fetch("https://api.allorigins.win/get?url=" + encodeURIComponent("https://zenquotes.io/api/random"));
        
        // 2. Parse the response into JSON
        const data = await response.json();
        const quoteData = JSON.parse(data.contents);
        
        // 3. Display the quote on the screen
        const quoteElement = document.getElementById('quote-container');
        quoteElement.innerHTML = `"${quoteData[0].q}" — <strong>${quoteData[0].a}</strong>`;
        
    } catch (error) {
        // If the internet is down or the API fails, show this:
        console.log("Error fetching quote:", error);
        document.getElementById('quote-container').innerText = "Stay productive today!";
    }
}

// 4. Call the function so it runs when the page loads
getQuote();