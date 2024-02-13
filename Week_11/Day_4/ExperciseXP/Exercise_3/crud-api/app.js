const express = require('express');
const app = express();
const fetchPost = require("./data/dataService.js")



app.get("/api/posts", async (req,res)=>{
    try {
    const posts = fetchPost()
    res.status(200).json(posts);
}catch(error){
    console.log('catched error: ', error);
    res.status(500).json({ error: 'bad network or server down' });
}
})
app.listen(5000, 'localhost', () =>{
    console.log('Server is running and listening on port 5000');
});