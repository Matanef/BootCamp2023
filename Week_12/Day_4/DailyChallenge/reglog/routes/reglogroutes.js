const express = require('express');
const router = express.Router();
const {
    getAllUsers,
     getUserById,
      insertNewUser,
       loginUser,
        updateExistingUser
    } = require('../controllers/reglogfunctions.js')


router.get('/', getAllUsers);
router.get('/:id', getUserById);
router.post('/register', insertNewUser)
router.post('/login', loginUser)
router.put('/:id', updateExistingUser)

module.exports = router