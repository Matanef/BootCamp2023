import TodoList from './todo.js'

const todoList = new TodoList;
todoList.addTask('Buy Toilet Paper');

console.log(todoList.listAllTasks());

todoList.markTaskAsComplete(0);
console.log(todoList.listAllTasks());