import {register} from "../models/users.js"
import { login } from "../models/users.js";
import { allUsers } from "../models/users.js";
import bcrypt from "bcrypt"
import  jwt  from "jsonwebtoken";
import dotenv from "dotenv"

dotenv.config();

export const _login = async (req,res) =>{
    try {
        const { email,password} = req.body;
        const user = await login(email.toLowerCase());
        //check if user exist in users table, if don't exist we get back an empty array
        if(user.length===0){
            return res.status(404).json({msg: "Email not found"})
        }
        //check password
        const match = bcrypt.compareSync(password+"", user[0].password)
        if(!match) {
        return res.status(404).json({msg: "Wrong Password"})
        }

        //token
        const userid = user[0].id
        const useremail = user[0].email

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
    } catch (error) {
        console.log(error);
        res.status(404).json({msg: "Something went wrong"})
    }

}

export const _register = async (req,res) =>{
    const { email,password} = req.body;
    const lowerEmail = email.toLowerCase();

    //encrypt the password
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password + "", salt);

    try {
        const user = await register(lowerEmail,hash);
        res.json(user)
    } catch (error) {
        console.log(error);
        res.status(404).json({msg: "email already exist in the system"})
    }
}

export const _allUsers = async (req,res) =>{
    try {
        console.log(req);
        const users = await allUsers();
        res.json(users)
    }  catch (error) {
        console.log(error);
        res.status(404).json({msg: "not found"})
    }
}

export const _logout = (req,res) =>{
    //delete cookie from table
    res.clearCookie("token");
    req.userid = null;
    req.useremail = null;
    res.sendStatus(200)
}