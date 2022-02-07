const express = require("express")
const bank = require("../models/productmodel")
const router = express.Router();
router.post("", async(req,res)=>{
    try{
        const bank = await bank.Create(req.body)
    }catch(err){
        return res.status(500).send({message: err.message});
    }
})

// router.get("", async(req,res)=>{
//     try{
//         let bank;
//         let filter = {$and:[{}], $or:[{}] };
//         if()
//     }catch(err){
//         return res.status(500).send({message: err.message});
//     }
// })