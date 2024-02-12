const express = require('express')
const {products} = require('./config/db.js')

const app = express();

app.listen(3001);

app.get('/api/products', (request, response)=>{
    // const newProducts = products.map(item=> {
    //     return{id:item.id, name:item.name}
    // })
response.json(products);
})

app.get('/api/products/:id/:name', (request,response)=>{
    console.log(request.params);
    const { id } = request.params;
    const product = products.find((item) => item.id == id);
    if (!product){
        response.status(404).json({msg:'Product not found'});
    }
    response.json(products)
})

app.get("/api/search", (request,response)=>{
    console.log(request.query);
    const {name} = request.query;
    const filterproducts = products.filter((item)=> {
        return item.name.toLowerCase().includes(name.toLowerCase())
    })
    if(filterproducts.length === 0){
        return response
        .status(404)
        .json({msg: 'No Product matches your search query'})
    }
    response.json(filterproducts)
})
