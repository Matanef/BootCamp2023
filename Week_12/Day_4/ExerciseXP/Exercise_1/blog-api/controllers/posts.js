const {
    _getAllPosts,
    _getSearchedPostById,
    _createPost,
    _updatePost,
    _deletePost,
} = require('../models/postsqueries.js')

const getAllPosts = (req, res) => {
   _getAllPosts()
   .then((data) =>{
    console.log('ping');
    res.json(data)
   })
   .catch((err) => {
    console.log(err);
    res.status(404).json({ messgae: "not found" });
  });
};

const getSearchedPostById = (req,res)=>{
  const id = req.params
  _getSearchedPostById(id)
  .then(data=> {
    console.log('ping Search by ID');
    res.json(data)
  })
    .catch(err => {
      console.log(err);
      res.status(404).json({msg: 'not found', err})
    })
  
}

const createPost = (req,res) => {
  const {title, content} = req.body
  const start = Date.now();
  _createPost(title,content)
  .then((data)=> {
    console.log(`${start} ping Post created`);
    res.status(201).json(data)
  })
  .catch((err) => {
    console.log(err);
    res.status(404).json({msg: 'not found', err})
    })
  }


const updatePost =(req,res)=>{
  const id = req.params.id
  const {title, content} = req.body;
  if({id}){
  _updatePost(id ,title,content)
  .then(data=> {
    console.log('ping Post Updated');
    res.status(201).json(data)
  })
    .catch(err => {
      console.log(err);
      res.status(404).json({ msg: 'Error updating post', err });
    
  })
  }else {
  res.status(400).json({ msg: 'Invalid request: Missing ID' });
}
}

const deletePost = (req,res) =>{
  const {id} = req.params;
  if (id) {
    _deletePost(id)
        .then(data => {
            console.log('Post deleted successfully');
            res.status(200).json(`Amount of posts deleted: ${data}`); // Use 200 for successful deletion
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ msg: 'Error deleting post', err }); // Use 500 for server error
        });
} else {
    res.status(400).json({ msg: 'Invalid request: Missing ID' }); // Use 400 for bad request
}
}




module.exports = {
    getAllPosts,
    getSearchedPostById,
    createPost,
    updatePost,
    deletePost,
}