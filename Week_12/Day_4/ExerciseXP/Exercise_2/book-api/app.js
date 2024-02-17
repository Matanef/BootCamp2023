const express = require('express');
const booksrouter = require('../book-api/routes/booksroutes.js')
const app = express();


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

app.use(express.urlencoded({extended:true}))
app.use(express.json())

// app.use('/', express.static()(__dirname + '/public'));
app.use('/api/books', booksrouter)
