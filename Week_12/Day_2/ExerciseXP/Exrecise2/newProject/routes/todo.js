const express = require('express');
const router = express.Router();


const todos = [
    { id: 1, text: 'Buy groceries', completed: false },
    { id: 2, text: 'Buy toilets', completed: false },
    { id: 3, text: 'Buy papper', completed: false }]

const getAllToDo = ()=>{
return todos
}


const newItem = (todo)=> {
    todos.push(todo)
}

const allToDowithnew = newItem()
console.log('This is new Item without the item: ',allToDowithnew);

const allToDo = getAllToDo()
console.log(allToDo);
console.log(todos);

const updateToDoById = async (id, updateToDo)=> {
    const index = todos.findIndex(todo=> todo.id ===id);
    console.log(todos[index]);
    if(id!==-1){
        todos[index]= updateToDo
    } else {
        console.log("Todo not found");
    }
}
updateToDoById(1, { id: 1, text: 'new text', completed: false });
console.log(todos)


const deleteToDoById = async (id)=> {
    const index = todos.findIndex(todo=> todo.id ===id);
    console.log(todos[index]);
    if(index !==-1){
        todos.splice(index, 1);
    } else {
        console.log("Todo not found");
    }
}
module.exports = router