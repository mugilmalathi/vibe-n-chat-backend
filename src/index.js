const express = require("express");
const cors = require("cors");
const app = express();


app.use(cors());
app.use(express.json());

require("dotenv").config();

const connect = require("./config/db");

const PORT = process.env.PORT;

const userdetailcontroller = require("./controller/userdetail.controller");
const postcomment = require("./controller/comment.controller");

app.use("/", userdetailcontroller);
app.use("/" , postcomment);

app.listen(PORT, async()=>{

    try{
        await connect();
        console.log("DB Connected..!");
    }catch(err){
        console.log(err);
    }
})