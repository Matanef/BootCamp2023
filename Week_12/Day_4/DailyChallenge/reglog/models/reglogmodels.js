const {db} = require('../config/relogconnect.js')

const _getAllUsers = ()=>{
    return db('users').select('id', 'first_name', 'last_name', 'username', 'email')
}

const _getUserById = (id) => {
    return db('users')
    .where(id)
    .select('id', 'first_name', 'last_name', 'username', 'email')
}

const _insertNewUser = (first_name, last_name, username, email) =>{
    return db('users').insert({first_name, last_name, username, email}, ['*'])
}

const _updateExistingUser = (id, first_name, last_name, username, email) =>{
    return db('users')
    .where({id})
    .update({first_name, last_name, username, email}, ['*'])
}


const _loginUser = (username) =>{
    return db('hashpwd').where({username}).first()
}

const _insertHashedPassword = (password, username) => {
    return db('hashpwd').insert({password, username},['*']);
};

const _getUserByUsername = (username) => {
    return db('hashpwd').whereILike('username', username)
}
module.exports = {
    _getAllUsers,
    _getUserById,
    _insertNewUser,
    _updateExistingUser,
    _insertHashedPassword,
    _loginUser
}