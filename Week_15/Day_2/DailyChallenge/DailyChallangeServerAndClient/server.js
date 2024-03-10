const express = require('express')
const app = express();


app.get('/api/hello', (res, req) =>{
    res.send('Hello from express')
})



const PORT = process.env.PORT || 5000
app.listen(PORT, () =>{
    console.log(`Server is running on port ${PORT}`);
})

