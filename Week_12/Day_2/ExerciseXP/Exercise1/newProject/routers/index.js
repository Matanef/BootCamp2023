const express = require('express');
const router = express.Router();

router.get('/', (req,res) => {
    res.send(`<h1>HomePage</h1>`)
})

router.get('/about', (req,res) => {
    res.send(`
    <h1>About Me</h1>
    <p style="display: inline-block; color: blue">really trying to be good at this course</p>`)
})

module.exports = router