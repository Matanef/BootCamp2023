const express = require('express');
const app = express()

app.listen(3000, 'localhost', ()=>{
    console.log('Server is running and listening on port 3000');
})
app.get('/api/greetings', (req,res)=> {
    res.json('Greetings to all')})
app.get('/api/testing', (req,res)=> {
    res.json([
        {message:'Greetings to all'},
        
    ])})