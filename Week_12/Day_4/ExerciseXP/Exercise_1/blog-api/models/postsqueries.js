const { db } = require("../config/postsconnect.js");

const _getAllPosts = ()=> {
    return db("posts").select("id", "title", "content");
     
}

const _getSearchedPostById = (id)=> {
    return db("posts")
    .where(id)
    .select("id", "title", "content")
    
}

const _createPost = (title, content) => {
    return db('posts')
    .insert({title, content}, ['*'])
    
}

const _updatePost = (id, title, content) =>{
    return db('posts')
    .where({id})
    .update({title,content},['*'])
    
}

const _deletePost= (id) => {
    return db('posts')
    .where({id})
    .delete()
}

module.exports = {
    _getAllPosts,
    _getSearchedPostById,
    _createPost,
    _updatePost,
    _deletePost
}
