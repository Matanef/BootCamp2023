const { 
    _getAllBooks,
    _getSpecificBook,
    _insertNewBook
 } = require("../models/bookqueries")

const getAllBooks = (req,res) => {
    _getAllBooks()
    .then((data)=> {
        console.log('ping get All');
        res.json(data)
    })
    .catch((err)=> {
        console.log(err);
        res.status(404).json({ messgae: "not found" });
    })
}

const getSpecificBook = (req, res) => {
    const id = req.params;
    // if(typeof id === "number"){
        _getSpecificBook(id)
            .then(data => {
                console.log('ping specific book');
                res.status(200).json(data);
            })
            .catch(err => {
                console.log(err);
                res.status(404).json({ message: "not found" });
            });
        // }else {
        //     res.status(404).json({ message: "please enter a number" });
        // }

};

const insertNewBook = (req,res) =>{
    const {title, author, publishedyear} = req.body
    _insertNewBook(title, author, publishedyear)
    .then(data => {
        console.log('ping insert new book');
        res.status(201).json(data);
    })
    .catch(err => {
        console.log(err);
        res.status(404).json({ message: "not found" });
    });
}








module.exports = {
    getAllBooks,
    getSpecificBook,
    insertNewBook,
}