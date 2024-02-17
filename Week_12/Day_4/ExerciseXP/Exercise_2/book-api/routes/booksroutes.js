const express = require('express')
const router = express.Router()
const { 
    getAllBooks,
    getSpecificBook,
    insertNewBook
 } = require('../controllers/booksfunction.js')

router.get('/', getAllBooks);
router.get('/:id', getSpecificBook);
router.post('/add', insertNewBook)

module.exports = router

