const tasks = [];


function addTask(){
    const inputUser = document.getElementById('inputUser');
    const taslList = document.getElementById('taskList');

    const taskText = inputUser.value.trim();
    if(taskText !==''){
    const taskId = tasks.length;
    const taskObject = {taskId: taskId,
                        text: taskText,
                        done: false};
    }
    console.log(tasks);
}