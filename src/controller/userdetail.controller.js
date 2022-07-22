const express = require("express");
const router = express.Router();
const Userdetails = require("../model/userdetail.model");

router.post("/userdetails", async(req, res)=>{

    try{
        const userdetails = await Userdetails.create(req.body);
        return res.status(201).send(userdetails);
    }catch(err){
        return res.status(500).send(err);
    }
})

router.get("/userdetails", async(req, res)=>{

    try{
        const userdetails = await Userdetails.find().lean().exec();
        return res.status(201).send(userdetails);
    }catch(err){
        return res.status(500).send(err);
    }
})

router.get("/userdetails/:id", async (req, res)=>{
    
    try{
        const userdetails = await Userdetails
        .find(req.params.id)
        .lean()
        .exec();
        return res.status(201).send(userdetails)
    }catch(err){
        return res.status(500).send({message: err.message})
    }
})

router.patch("/userdetails/:id", async (req, res)=>{
    
    try{
        const userdetails = await Userdetails.findByIdAndUpdate(
            req.params.id,
            req.body,{
               new:true
            });
        return res.send(userdetails)
    }catch(err){
        return res.status(500).send({message: err.message})
    }
})

router.delete("/userdetails/:id", async (req, res)=>{
    
    try{
        const userdetails = await Userdetails.findByIdAndDelete(
            req.params.id
            );
        return res.send(userdetails)
    }catch(err){
        return res.status(500).send({message: err.message})
    }
})

module.exports = router;