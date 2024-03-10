const express = require('express')
const app = express();

app.get("/api/hello", (req, res) => {
  res.send("Hello from express");
});

app.post('/', (req,res)=> {
    const { serverResponse } = req.body;
    push({serverResponse})
    res.status(201).send('new task was created')
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
