const bcrypt = require('bcrypt')
const { 
    _getAllUsers,
    _getUserById,
    _insertNewUser,
    // _loginUser,
    _updateExistingUser,
    _insertHashedPassword
} =require('../models/reglogmodels.js')

const getAllUsers = (req,res)=> {
    _getAllUsers()
    .then(data => {
        console.log('ping All Users');
        res.status(200).json(data);
    })
    .catch(err => {
        console.log(err);
        res.status(404).json({ message: "not found" });
    });
}

const getUserById = (req,res) =>{
    const id = req.params;
    _getUserById(id)
    .then(data => {
        console.log(data);
        res.status(200).json(data);
    })
    .catch(err => {
        console.log(err);
        res.status(404).json({ message: "User not found" });
    });
}

const insertNewUser = (req,res) => {
    const {first_name, last_name, username, email, password} = req.body;
    bcrypt.hash(password, 10)
    .then(password =>{
        _insertNewUser(first_name, last_name, username, email)
        .then(user => {
            _insertHashedPassword(password, username)
            .then(() => {
                res.status(200).json({ message: 'User created successfully', user });
            })
            .catch(error => {
                console.error('Error inserting hashed password:', error);
                res.status(500).json({ message: 'Internal server error' });
            });
        }).catch(error => {
            console.error('Error inserting new user:', error);
            res.status(500).json({ message: 'Internal server error' });
        })
        .catch(error => {
            console.error('Error hashing password:', error);
            res.status(500).json({ message: 'Internal server error' });
        });
    }
    )}
    


const updateExistingUser = (req,res) =>{
    const id = req.params.id
    const {first_name, last_name, username, email} = req.body;
    if({id}){
    _updateExistingUser(id, first_name, last_name, username, email)
    .then(data => {
        console.log(data);
        res.status(201).json(data);
    })
    .catch(err => {
        console.log(err);
        res.status(404).json({ message: "User not found" });
    });
}
}

// const loginUser = (req,res) => {
//     const {username, password} = req.body;
//     _loginUser(username)
//     .then(user =>{
//         if(!user){
//             return res.status(404).json('User not found')
//         }
//         bcrypt.compare(password, )
//     })

// }


module.exports = {
    getAllUsers,
    getUserById,
    insertNewUser,
    // loginUser,
    updateExistingUser,    
}