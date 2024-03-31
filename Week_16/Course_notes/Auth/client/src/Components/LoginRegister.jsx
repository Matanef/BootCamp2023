import { useState, useContext } from "react"
import {useNavigate, Link} from "react-router-dom"
import axios from 'axios'
import {Box, TextField, Button} from '@mui/material'
import { AuthContext } from "../App"

const LoginRegister = ({ page }) => {
    return ( 
        <>
        <h2>{page}</h2>
        <Box component={'form'} sx={{m:1}} autoComplete="off">
            <TextField
            sx={{m:1}}
            id="email"
            type="email"
            label="Enter your Email"
            variant="outlined"
            />
            <TextField
            sx={{m:1}}
            id="password"
            type="password"
            label="Enter your Password"
            variant="outlined"
            />
        </Box>
        <Button variant="contained">{page}</Button>
        <div>message</div>
        </>
    )
}

export default LoginRegister
