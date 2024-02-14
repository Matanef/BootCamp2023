const express = require('express');
const app = express();
const todoroutes = require('./routes/todo.js')


app.use(express.json());
app.use('/todos', todoroutes)

const PORT = process.env.PORT || 3000;
app.listen(PORT, 'localhost', () => {
    console.log(`Server is running and listening on port ${PORT}`);
})