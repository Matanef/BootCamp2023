const express = require('express')
const cors = require('cors')
const router = require('./routes/products.js')

const app = express();
app.use(cors())

const PORT = process.env.PORT || 5000
app.listen(PORT, () =>{
    console.log(`Server is running on port ${PORT}`);
})

app.use('/api/products', router)