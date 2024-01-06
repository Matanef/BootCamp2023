const tasks = [];

const body = document.body
let title = document.createElement('h2');
    title.style.display= "grid";
    title.style.alignContent= "center";
    title.innerText = "TO-DO List"
body.appendChild(title)

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


    const label = document.createElement('label');
    label.setAttribute('for', `checkbox_${taskId}`);
    label.textContent= taskText;
    
    taskDiv.appendChild(checkBox);
    taskDiv.appendChild(label);

    taskList.appendChild(taskDiv);

    inputUser.value = '';
    console.log(tasks)
    }
    
    console.log(tasks);
}