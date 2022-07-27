const express = require("express");
const cors = require("cors");
const app = express();

const fileupload = require('express-fileupload');

app.use(fileupload());


app.post('/upload', (req, res) => {
    if(req.files === null) {
        return res.status(400).json({msg: 'No file uploaded'});
    }

    const file = req.files.file;

    file.mv(`C:/Users/mugil/Downloads/Projects/Vibe n Chat/Vibe-n-Chat/public/uploads/${file.name}`, err => {
        if(err) {
            console.log(err);
            return res.status(500).send(err);
        }

        res.json({ fileName: file.name, filePath: `/uploads/${file.name}`});
    })
})


app.use(cors());
app.use(express.json());

require("dotenv").config();

const connect = require("./config/db");

const PORT = process.env.PORT;

const userdetailcontroller = require("./controller/userdetail.controller");
const postcomment = require("./controller/comment.controller");
const searchController = require("./controller/search.controller");

app.use("/", userdetailcontroller);
app.use("/" , postcomment);
app.use("/", searchController);

app.listen(PORT, async()=>{

    try{
        await connect();
        console.log("DB Connected..!");
    }catch(err){
        console.log(err);
    }
})