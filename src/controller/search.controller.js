const express = require("express");
const router = express.Router();
const Search = require("../model/search.model");

router.post("/search", async(req, res)=>{

    try{
        const search = await Search.create(req.body);
        return res.status(201).send(search);
    }catch(err){
        return res.status(500).send(err);
    }
})

router.get("/search", async(req, res)=>{

    try{
        const search = await Search.find().lean().exec();
        return res.status(201).send(search);
    }catch(err){
        return res.status(500).send(err);
    }
})

router.get("/search/:id", async (req, res)=>{
    
    try{
        const search = await Search
        .find(req.params.id)
        .lean()
        .exec();
        return res.status(201).send(search)
    }catch(err){
        return res.status(500).send({message: err.message})
    }
})

router.patch("/search/:id", async (req, res)=>{
    
    try{
        const search = await Search.findByIdAndUpdate(
            req.params.id,
            req.body,{
               new:true
            });
        return res.send(search)
    }catch(err){
        return res.status(500).send({message: err.message})
    }
})

router.delete("/search/:id", async (req, res)=>{
    
    try{
        const search = await Search.findByIdAndDelete(
            req.params.id
            );
        return res.send(search)
    }catch(err){
        return res.status(500).send({message: err.message})
    }
})

module.exports = router;