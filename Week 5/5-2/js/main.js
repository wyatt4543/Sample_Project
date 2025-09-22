let tasks = [];

//function to add a new task
function addTask() {
    const taskInput = document.getElementById("taskInput");
    const task = taskInput.value.trim();

    if (task !== "") {
        tasks.push(task);
        renderTasks();
        taskInput.value = "";
    }          
}

//Function to show the task list
function renderTasks() {
    const taskList = document.getElementById("tasks");
    taskList.innerHTML = "";

    for (let i = 0; i < tasks.length; i++) {
        taskList.innerHTML = taskList.innerHTML + "<li>" + tasks[i] + "<button onclick=removeTask(" + i + ")>Remove Task</button></li>"
    }
}

//Function to remove item in the list
function removeTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}