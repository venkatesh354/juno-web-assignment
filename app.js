let tasks = [];

let currentTab = "Pending";

function renderTasks() {
    const filteredTasks = tasks.filter(task => task.status === currentTab || currentTab === "All");
    const searchInput = document.getElementById("searchInput").value.toLowerCase();

    const filteredAndSearchedTasks = filteredTasks.filter(task => task.title.toLowerCase().includes(searchInput));

    const taskList = document.getElementById("taskList");
    taskList.innerHTML = "";

    filteredAndSearchedTasks.forEach(task => {
        const li = document.createElement("li");
        li.textContent = `${task.title} - ${task.date}`;
        taskList.appendChild(li);
    });
}

function changeTab(tab) {
    currentTab = tab;
    renderTasks();
}

function filterTasks() {
    renderTasks();
}

// Fetch data from the server
async function fetchData() {
    const response = await fetch('data.json');
    const data = await response.json();
    tasks = data.tasks;
    renderTasks();
}

// Initial render
fetchData();
