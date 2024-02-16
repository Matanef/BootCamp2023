const express = require('express');
const app = express();
const dailyRoutes = require('./routes/dailyroutes.js');

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>{
    console.log(`Server is running and listening on port ${PORT}`);
})

app.use(express.json())
app.use('/placeholder', dailyRoutes)