document.getElementById('add-task').addEventListener('click', function() {
  const taskInput = document.getElementById('new-task');
  const taskText = taskInput.value.trim();

  /*
    1. Listens for an event (click) on the add-task button
    2. When the button is clicked the variable taskInput is assigned the new-task id from html
    3. And taskText is assigned the value from taskInput (input from html)
  */

    if (taskText !== "") {
      addTaskToList(taskText);
      taskInput.value = "";
    }

    /*
      1. If the taskText variable has a value then add it to the taskList
    */
});

function addTaskToList(task) {
  const taskList = document.getElementById('tasks'); // ul tag
  const newTaskItem = document.createElement('li'); // creates new li element

  newTaskItem.textContent = task;
  taskList.appendChild(newTaskItem);

  // Add event listener for task removal
  newTaskItem.addEventListener('click', function() {
    this.remove();
  })
}