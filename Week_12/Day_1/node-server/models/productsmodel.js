const {db} = require('../config/pgconnect.js')

const _getAllProducts = ()=> {
return db('products').select('id', 'name', 'price').orderBy("name")
}

module.exports = {
    _getAllProducts,
};