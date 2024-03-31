import express from 'express'
import { _register } from '../controllers/users.controller.js'
import { _login, _allUsers, _logout } from '../controllers/users.controller.js';
import { verifyToken } from '../middlewares/verifyToken.js';

import dotenv from 'dotenv'
import jwt from 'jsonwebtoken'
dotenv.config();

const router = express.Router()


router.get('/', verifyToken, _allUsers )

router.post('/register', _register);
router.post('/login', _login )
router.get('/logout', _logout)
router.get('/verify', verifyToken, (req,res) =>{

    // res.sendStatus(200)

    const userid = req.userid
    const useremail = req.useremail

    const secret = process.env.ACCESS_TOKEN_SECERT;

    const accessToken = jwt.sign({userid, useremail}, secret, {
        expiresIn: "60s"
    });

    res.cookie("token", accessToken, {
        maxAge: 60 * 1000, 
        httpOnly: true,
    })

    //update user table with this token

    res.json({token:accessToken})
})


export default router;
