const express = require('express');
const {
    getAllProducts,
    searchProductByName,
    insertProduct
    } = require("../controllers/pcontroller.js")
const router = express.Router();

router.get('/all', getAllProducts)
router.get('/search', searchProductByName)
router.post('/add', insertProduct)

module.exports = router