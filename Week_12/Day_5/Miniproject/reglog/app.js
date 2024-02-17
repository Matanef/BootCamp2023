const express = require('express')
const app = express();
const reglogRouter = require('../reglog/routes/reglogroutes.js')


const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
    console.log(`Server is running and listening on port ${PORT}`);
});

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use('/users', reglogRouter)



