const { db } = require("../config/postsconnect.js");

const _getAllPosts = ()=> {
    return db("posts").select("id", "title", "content");
     
}

const _getSearchedPostById = (id)=> {
    return db("posts")
    .select("id", "title", "content")
    .where('id', `%${id}%`)
}

const _createPost = (title, content) => {
    return db('posts')
    .insert({title, content}, ['*'])
    
}

// const _updatePost = (id) =>{
//     return db('post')
//     .update({title,content},['*'])
// }

module.exports = {
    _getAllPosts,
    _getSearchedPostById,
    _createPost,
    // _updatePost,
}
