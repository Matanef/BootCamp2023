const express = require('express');
const router = express.Router();
const {
    getAllPosts, 
    getSearchedPostById, 
    createPost, 
    // updatePost, 
    // deletePost,
} = require('../controllers/posts.js');


// GET /posts: Return a list of all blog posts.
// GET /posts/:id: Return a specific blog post based on its id.
// POST /posts: Create a new blog post.
// PUT /posts/:id: Update an existing blog post.
// DELETE /posts/:id: Delete a blog post.

router.get('/', getAllPosts)
router.get('/:id', getSearchedPostById)
router.post('/add', createPost)
// router.put('/:id', updatePost)
// router.delete('/:id', deletePost)


module.exports = router