const express = require('express');
const app = express();
const books = require("./books.js")

app.listen(5000, 'localhost', () =>{
    console.log('Server is running and listening on port 5000');
})

app.get("/api/books", (req,res)=>{
    return res.status(200).json(books)
});

app.get("/api/books/:bookId", (req,res)=>{
    const id = Number(req.params.bookId)
    const newBookFind = (books.find((book) => book.id === id))
    if(!book){
        return res.status(404).json("book not found")
    }
    return res.status(200).json(newBookFind)
})


app.use(express.json());
app.post("/api/books", (req,res)=>{
    const newBook = {
        id: books.length + 1,
        title: req.body.title,
        author: req.body.author,
        publishedYear: req.body.publishedYear

    }
    books.push(newBook);
    res.status(201).json(newBook)
})