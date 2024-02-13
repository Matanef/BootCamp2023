const express = require('express');
const app = express();
const posts = require('./data.js');

app.listen(5000, 'localhost', ()=> {
    console.log('server is running and listening on port 5000');
});

app.use(express.json());
app.post("/api/posts", (req,res) => {
    const newpost = {
        id: posts.length + 1,
        name: req.body.name,
        price: req.body.price,
    };
    posts.push(newpost);
    res.status(201).json(newpost);
});

app.get("/api/posts", (req,res)=> {
    res.json(posts)
})

app.get("/api/posts/:postID", (req,res)=>{
    const id = Number(req.params.postID);
    const newPosts = posts.find((post) => post.id ===id);
    if(!posts) {
        res.status(404).send('No post was found using the given query');
    }
    res.status(200).send(newPosts)
})

app.use(express.json());
app.put("/api/posts/:postID", (req,res)=>{
    const id = Number(req.params.postID);
    const postIndex = posts.find((post) => post.id ===id);
    if(!posts){
        return res.status(404).send('Post was not found');
    }
const updatedpost = {
    id: posts[postIndex].id,
    name: req.body.name,
    content: req.body.content
}
posts[index] = updatedpost;
res.status(200).json('Post Updated')
})



app.use(express.json()); // parse json body content
app.delete("/api/posts/:postID", (req, res) => {
  const id = Number(req.params.postID);
  const index = posts.findIndex((post) => post.id === id);
  if (index === -1) {
    return res.status(404).send("Post not found");
  }
  posts.splice(index, 1);
  res.status(200).json("Post deleted");
});