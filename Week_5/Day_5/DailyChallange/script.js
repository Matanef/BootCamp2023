const tasks = [];


function addTask(){
    const inputUser = document.getElementById('inputUser');
    console.log(inputUser);
    const taskList = document.getElementById('taskList');
    console.log(taskList);

    const taskText = inputUser.value.trim();
    if(taskText !==''){
    const taskId = tasks.length;
    const taskObject = {taskId: taskId,
                        text: taskText,
                        done: false};
    tasks.push(taskObject)
    const taskDiv = document.createElement('div');
    taskDiv.classList.add('task');
    
    const checkBox = document.createElement('input');
    checkBox.type = 'checkbox'
    checkBox.id = `checkbox_${taskId}`;
    // checkBox.addEventListener('change', doneTask(taskId));

    const label = document.createElement('label');
    label.setAttribute('for', `checkbox_${taskId}`);
    label.textContent= taskText;
    
    const deleteButton  = document.createElement('button');
    deleteButton.innerHTML =  `<i class="fa-regular fa-circle-xmark"></i>`;
    // deleteButton.addEventListener('click', deleteTask(taskId));
    
    taskDiv.appendChild(checkBox);
    taskDiv.appendChild(label);
    taskDiv.appendChild(deleteButton);

    taskList.appendChild(taskDiv);

    inputUser.value = '';
    console.log(tasks)
    }
    
    console.log(tasks);
}