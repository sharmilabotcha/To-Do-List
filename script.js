document.getElementById('addTaskButton').addEventListener('click', addTask);

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const dueDateInput = document.getElementById('dueDateInput');
    const taskText = taskInput.value.trim();
    const dueDateText = dueDateInput.value.trim();

    if (taskText === '' || dueDateText === '') {
        alert('Please enter both a task and a due date.');
        return;
    }

    const taskList = document.getElementById('taskList');
    const taskItem = document.createElement('li');
    taskItem.classList.add('task-item'); 

    
    const taskDetails = document.createElement('div');
    taskDetails.classList.add('task-details');

    const taskName = document.createElement('span');
    taskName.textContent = taskText;
    taskDetails.appendChild(taskName);

    
    const dueDate = document.createElement('span');
    dueDate.textContent = ` Due: ${dueDateText}`;
    taskDetails.appendChild(dueDate);

    taskItem.appendChild(taskDetails);

    taskItem.addEventListener('click', function() {
        taskItem.classList.toggle('completed');
    });

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'x';
    deleteButton.classList.add('deleteButton');
    deleteButton.addEventListener('click', function() {
        taskList.removeChild(taskItem);
    });

    taskItem.appendChild(deleteButton);
    taskList.appendChild(taskItem);

    
    taskInput.value = '';
    dueDateInput.value = '';
}


