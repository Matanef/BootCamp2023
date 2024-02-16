const {
    getProducts,
    searchProduct,
    addProduct} = require('../models/pmodel.js')


const getAllProducts = (req,res) => {
    getProducts()
    .then(data =>{
        res.json(data)
    })
    .catch(err=>{
        console.log(err);
        res.status(404).json({msg:'404 no product'})
    })
}

const searchProductByName = (req,res) =>{
    const {name} = req.query
    searchProduct(name)
    .then(data =>{
        res.json(data)
    })
    .catch(err=>{
        console.log(err);
        res.status(404).json({msg:'404 no product'})
    })
}

const insertProduct = (req,res)=>{
    console.log(req.body);
    const {name, price} = req.body;
    addProduct(name, price)
    .then((data) =>{
        res.status(201).json(data)
        console.log('item successfully added to the list');
    })
    .catch((err)=>{
        console.log(err);
        res.status(404).json({msg:'404 no product'})
    })
}

module.exports = {
    getAllProducts,
    searchProductByName,
    insertProduct
}