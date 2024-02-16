const {db} = require('../config/pgdb.js')

const getProducts = ()=> {
    return db('products').select('id', 'name', 'price')
};


const searchProduct = (name)=>{
    return db('products')
    .select('id', 'name', 'price')
    .whereILike('name', `%${name}%`)
}

const addProduct = (productname, productprice) =>{
    return db('products')
    .insert({name: productname, price: productprice}, ['*'])
};



module.exports= {
    getProducts,
    searchProduct,
    addProduct,
}