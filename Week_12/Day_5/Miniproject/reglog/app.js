const express = require('express')
const app = express();
const bp = require("body-parser");
const cors = require('cors')
const reglogRouter = require('../reglog/routes/reglogroutes.js')

app.use(cors())

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
    console.log(`Server is running and listening on port ${PORT}`);
});

app.use(bp.urlencoded({extended:true}));
app.use(bp.json());
app.use("/", express.static(__dirname + "/public"));
app.use('/users', reglogRouter)



