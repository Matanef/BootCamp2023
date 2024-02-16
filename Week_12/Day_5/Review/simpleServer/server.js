const cors = require('cors');
const express = require('express');
const {getProducts} = require('../simpleServer/models/pmodel.js');
const prouter = require('../simpleServer/routes/prouter.js');
const app = express();


app.use(express.urlencoded({extended:true}));
app.use(cors())
app.use(express.json());
app.listen(3004, ()=>{
    console.log('runnig on 3004');
})

app.use('/', express.static(__dirname + "/public"));

app.use(prouter)




