const express = require('express');
const router = express.Router();

const books = [
    {
        id: 1,
        title: 'The Great Gatsby',
        author: 'F. Scott Fitzgerald',
        genre: 'Fiction',
        year: 1925
    },
    {
        id: 2,
        title: 'To Kill a Mockingbird',
        author: 'Harper Lee',
        genre: 'Fiction',
        year: 1960
    },
    {
        id: 3,
        title: '1984',
        author: 'George Orwell',
        genre: 'Science Fiction',
        year: 1949
    },
    {
        id: 4,
        title: 'Pride and Prejudice',
        author: 'Jane Austen',
        genre: 'Romance',
        year: 1813
    },
    {
        id: 5,
        title: 'The Catcher in the Rye',
        author: 'J.D. Salinger',
        genre: 'Fiction',
        year: 1951
    }
];

// Get all books
router.get('/', (req, res)=>{
    res.send(books)
})
// console.log(books);


// Add a new book
router.post('/', (req,res)=>{
    const {id, title, author, genre, year} = req.body;
    books.push({id, title, author, genre, year});
    res.status(201).json({message: "updating the book list with a new entry funushed successfully"});
})

// books.push({title, author, genre,year});
// res.status(201).send('Book information was updated successfully')

// Update a book by ID
router.put('/:id', (req,res)=> {
    const id = req.params.id;
    console.log('Received ID:', id);
    const title = req.body.title;
    const author = req.body.author;
    const genre = req.body.genre;
    const year = req.body.year;
    console.log('Received Data:', title, author, genre, year);
    
    console.log('All Books:', books);
    const index = books.findIndex(book=> book.id ===id);
    if(id !== -1){
       books[index].title = title;
       books[index].author = author;
       books[index].genre = genre;
       books[index].year = year;
       res.status(201).json({message: "Update finished successfully"})
    }else{
        res.status(404).json({message: "Failed updating book information"})
    }
})

// Delete a book by ID

router.delete('/:id', (req,res)=> {
    const id = req.params.id;
    const index = books.findIndex(book=> book.id ===id);
    if(index!=-1){
        books.splice(index, 1)
        res.status(204).json({message: 'book deleted successfully'})
    }else{
        res.status(404).json({message: 'book not found'})
    }
})
module.exports = router