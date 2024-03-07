const {
    _getProductById,
     _getAllProducts
} = require('../models/products.js')

const getAllProducts = async (req,res) =>{
    try{
        const data = await _getAllProducts();
        res.json(data)
    }catch (error) {
        console.log(error);
        res.status(404).json({msg: error.message});
    }
}

const getProductById = async (req,res) =>{
try {
    const{id} = req.params
    const data = await _getProductById(id);
    res.json(data)
}catch (error) {
    console.log(error);
    res.status(404).json({msg: error.message});
}
}

module.exports = {
    getAllProducts,
    getProductById
}