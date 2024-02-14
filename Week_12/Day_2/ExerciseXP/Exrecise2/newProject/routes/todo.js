const express = require('express');
const router = express.Router();


const todos = [
    { id: 1, text: 'Buy groceries', completed: false },
    { id: 2, text: 'Buy toilets', completed: false },
    { id: 3, text: 'Buy papper', completed: false }]
    

router.get('/', (req,res) => {
    
    res.send(todos)
})

console.log(todos);
router.post('/', (req,res)=> {
    const { id, text, completed} = req.body;
    todos.push({id, text, completed})
    res.status(201).send('new task was created')
})


router.put('/:id', (req, res)=>{
    const id = req.params.id;
    const newText = req.params.text;
    const completed = req.params.completed;
    const index = todos.findIndex(todo=> todo.id ===id);
    console.log(todos[index]);
    if(id!==-1){
        todos[index].text = newText;
        todos[index].completed = completed
        res.end({message: 'Todo updated successfully'})
    } else {
        console.log("Todo not found");
        res.status({message: 'Todo not Found'})
    }

})

router.delete('/:id', (req, res)=>{
    const id = req.params.id;
    // const newText = req.params.text;
    const index = todos.findIndex(todo=> todo.id ===id);
    if (index !== 1){
        todos.splice(index, 1)
        res.json({message: 'Todo successfully deleted'})
    }else{
        res.status(404).json({message: 'Todo not found'})
    }
})



// const updateToDoById = async (id, updateToDo)=> {
//     const index = todos.findIndex(todo=> todo.id ===id);
//     console.log(todos[index]);
//     if(id!==-1){
//         todos[index]= updateToDo
//     } else {
//         console.log("Todo not found");
//     }
// }
// updateToDoById(1, { id: 1, text: 'new text', completed: false });
// console.log(todos)


// const deleteToDoById = async (id)=> {
//     const index = todos.findIndex(todo=> todo.id ===id);
//     console.log(todos[index]);
//     if(index !==-1){
//         todos.splice(index, 1);
//     } else {
//         console.log("Todo not found");
//     }
// }
module.exports = router