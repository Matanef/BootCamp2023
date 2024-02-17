const { db } = require('../config/booksconnetct.js');

const _getAllBooks = () => {
    return db("books").select("id", "title", "author", "publishedyear")
}

const _getSpecificBook = (id) =>{
    return db("books")
    .where(id)
    .select("id", "title", "author", "publishedyear")
}

const _insertNewBook = (title, author, publishedyear) => {
    return db('books')
    .insert({title, author, publishedyear}, ['*'])
}



module.exports = {
    _getAllBooks,
    _getSpecificBook,
    _insertNewBook,
}