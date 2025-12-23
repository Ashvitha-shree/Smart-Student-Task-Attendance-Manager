let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
let present = 0;
let total = 0;

function addTask() {
    let task = document.getElementById("taskInput").value;
    if (task === "") return;

    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    displayTasks();
}

function displayTasks() {
    let list = document.getElementById("taskList");
    list.innerHTML = "";
    tasks.forEach((t, i) => {
        let li = document.createElement("li");
        li.textContent = t;
        list.appendChild(li);
    });
}

function markPresent() {
    present++;
    total++;
    updateAttendance();
}

function markAbsent() {
    total++;
    updateAttendance();
}

function updateAttendance() {
    let percent = ((present / total) * 100).toFixed(2);
    document.getElementById("attendance").innerText =
        `Attendance: ${percent}%`;
}

displayTasks();
