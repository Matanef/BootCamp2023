import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

export const verifyToken= (req, res, next) =>{
    const accessToken = req.cookies.token

    console.log('accessToken', accessToken);

    if(!accessToken) return res.status(401).json({msg: "Unauthorized"})
    
    jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECERT, (err,decode)=>{
        if(err) return res.status(403).json({msg: "forbidden"});

        req.userid = decode.userid;
        req.useremail = decode.useremail;

        next();
    });
};