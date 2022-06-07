const express = require("express")

const User = require("../models/product.model")

const router = express.Router()

router.post("/create", async (req,res)=>{
       try{
          const user = await User.create(req.body)
          return res.status(200).send(user)
       }catch(err){
          return res.status(500).send(err)
       }
})

router.get("", async (req,res)=>{
    try{
       const user = await User.find().lean().exec()
       return res.status(200).send(user)
    }catch(err){
        return res.status(500).send(err)
    }
})

router.get("/:id", async (req,res)=>{
    try{
       const user = await User.findById(req.params.id).lean().exec()
       return res.status(200).send(user)
    }catch(err){
        return res.status(500).send(err)
    }
})

router.patch("/:id/edit", async(req,res)=>{
    try{
    const user = await User.findByIdAndUpdate(req.params.id,req.body).lean().exec()
    return res.status(200).send(user)
    }catch(err){
        return res.status(500).send(err)
    }
})
module.exports = router