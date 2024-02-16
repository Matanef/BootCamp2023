const {
    _getAllPosts,
    _getSearchedPostById,
    _createPost,
    // _updatePost,
    // _deletePost,
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
  const id = req.query
  _getSearchedPostById(id)
  .then(data=> {
    console.log('pingS');
    res.json(data)
  })
    .catch(err => {
      console.log(err);
      res.status(404).json({msg: 'not found', err})
    })
  
}

const createPost = (req,res) => {
  const {title, content} = req.body
  _createPost(title,content)
  .then((data)=> {
    res.status(201).json(data)
  })
  .catch((err) => {
    console.log(err);
    res.status(404).json({msg: 'not found', err})
    })
  }


// const updatePost =(req,res)=>{
//   const {id, title, content} = req.body;
//   if(id !==-1){
//   _updatePost({title,content})
//   .then(data=> {
//     res.status(201).json(data)
//     .catch(err => {
//       console.log(err);
//       res.status(404).json({msg: 'not found', err})
//     })
//   })
// }
// }



module.exports = {
    getAllPosts,
    getSearchedPostById,
    createPost,
    // updatePost
}