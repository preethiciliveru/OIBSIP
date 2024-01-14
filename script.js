function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value.trim();
    
    if (taskText !== "") {
      let pendingTasks = document.getElementById("pendingTasks");
      let newTask = document.createElement("li");
      newTask.textContent = taskText;
      newTask.onclick = function() {
        markAsComplete(this);
      };
      pendingTasks.appendChild(newTask);
      taskInput.value = "";
    } else {
      alert("Please enter a task!");
    }
  }
  
  function markAsComplete(task) {
    task.classList.toggle("completed");
    let completedTasks = document.getElementById("completedTasks");
    completedTasks.appendChild(task);
  }
  