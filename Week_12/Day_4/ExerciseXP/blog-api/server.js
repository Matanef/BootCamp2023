const express = require('express')
const postsRouter = require('../blog-api/routes/postsroutes.js');
const app = express();

app.use(express.urlencoded({extended:true}))
app.use(express.json())


const PORT = process.env.PORT || 3005;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

app.use('/', express.static(__dirname + '/public'))
app.use('/posts', postsRouter);