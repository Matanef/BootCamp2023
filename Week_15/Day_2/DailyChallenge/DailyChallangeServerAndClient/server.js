const express = require('express')
const cors = require('cors')
const app = express();
app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get("/api/hello", (req, res) => {
  res.json({msg: "Hello from express"});
});

app.post("/api/world", (req,res) =>{
    const {input} = req.body
    res.json({msg: `I recieved your Post request. ${input}`});
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
