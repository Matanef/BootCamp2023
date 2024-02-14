const express = require('express');
const app = express();
const routes = require('./routers')

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running and listening on port ${PORT}`);
})

app.use(express.json());
app.use('/', routes)