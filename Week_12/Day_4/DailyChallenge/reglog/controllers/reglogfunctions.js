const { 
    _getAllUsers,
    _getUserById,
    _insertNewUser,
    _loginUser,
    _updateExistingUser,
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
    const {first_name, last_name, username, email} = req.body;
    _insertNewUser(first_name, last_name, username, email)
    .then(data => {
        console.log(data);
        res.status(200).json(data);
    })
    .catch(err => {
        console.log(err);
        res.status(404).json({ message: "not found" });
    });
}

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



module.exports = {
    getAllUsers,
    getUserById,
    insertNewUser,
    loginUser,
    updateExistingUser,    
}