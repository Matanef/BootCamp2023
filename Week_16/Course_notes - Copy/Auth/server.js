import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser'
import usersrouter from './routes/users.routes.js'

const app = express()
// app.use(cors({credentials:true, origin:'http://localhost:5173'}));
app.use(cors({credentials:true}));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cookieParser());

const PORT = process.env.PORT || 5000
app.listen(PORT, () =>{
    console.log(`Server is running on port ${PORT}`);
})

app.use('/users', usersrouter)