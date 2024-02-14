const express = require('express')
const app = express()
const bookRoute = require('./routes/book.js')


const PORT = process.env.PORT || 3000; 
app.listen(PORT, 'localhost', ()=>{
    console.log(`Server is running and listening on port ${PORT}`);
});


app.use(express.json())
app.use('/api/books', bookRoute)
