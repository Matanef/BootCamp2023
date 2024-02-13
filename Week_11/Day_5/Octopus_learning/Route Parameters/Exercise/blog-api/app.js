const express = require('express');
const app = express();
const posts = require('./data');

app.listen(3000, 'localhost', () => {
    console.log('Server running and listening on port 3000');
})
app.get("/api/posts", (req,res)=> {
    res.json(posts)
})
app.get("/api/posts/:postID", (req,res)=>{
    const id = Number(req.params.postID);
    const post = posts.find((post) => post.id ===id);
    if(!post){
        return res.status(404).send(`post not found`)
    }
    res.json(post)
})


app.get("/api/search", (req,res)=> {
    const title = req.query.title.toLowerCase();
    console.log(title);
    const post_result = posts.filter((post) =>{
        return post.title.toLowerCase().includes(title)
    })
    if(post_result<1){
        return res.status(404).send(`<h1>No Post was found that matches your search query</h1>`)
    }
    res.json(post_result)
})
//test: http://localhost:3000/api/search?title=api


