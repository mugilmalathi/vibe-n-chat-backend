const express = require("express");
const router = express.Router();
const PostComment = require("../model/postcomment.model");

router.post("/postcomment", async(req, res)=>{

    try{
        const postcomment = await PostComment.create(req.body);
        return res.status(201).send(postcomment);
    }catch(err){
        return res.status(500).send(err);
    }
})

router.get("/postcomment", async(req, res)=>{

    try{
        const postcomment = await PostComment.find().lean().exec();
        return res.status(201).send(postcomment);
    }catch(err){
        return res.status(500).send(err);
    }
})

router.get("/postcomment/:id", async (req, res)=>{
    
    try{
        const postcomment = await PostComment
        .find(req.params.id)
        .lean()
        .exec();
        return res.status(201).send(postcomment)
    }catch(err){
        return res.status(500).send({message: err.message})
    }
})

router.patch("/postcomment/:id", async (req, res)=>{
    
    try{
        const postcomment = await PostComment.findByIdAndUpdate(
            req.params.id,
            req.body,{
               new:true
            });
        return res.send(postcomment)
    }catch(err){
        return res.status(500).send({message: err.message})
    }
})

router.delete("/postcomment/:id", async (req, res)=>{
    
    try{
        const postcomment = await PostComment.findByIdAndDelete(
            req.params.id
            );
        return res.send(postcomment)
    }catch(err){
        return res.status(500).send({message: err.message})
    }
})

module.exports = router;