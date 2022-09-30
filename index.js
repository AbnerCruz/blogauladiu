const express = require("express");
const path = require("path");
const app = express();
const router = express.Router();
const port = process.env.PORT || 3000;

router.get("/", (req, res) =>{
    res.sendFile(path.join(__dirname + "/src/pages/index.html"));
})

router.get("/contato", (req, res) =>{
    res.sendFile(path.join(__dirname + "/src/pages/contato.html"));
})

app.use(router)
app.listen(port, ()=>{
    console.log("Server On")
})