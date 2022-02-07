const express = require("express")
const user_banking = require("../models/productmodel")
const branch_banking = require("../models/productmodel")
const master_banking = require("../models/productmodel")
const saving_banking = require("../models/productmodel")
const fixed_banking = require("../models/productmodel")

const router = express.Router();
router.post("", async(req,res)=>{
    try{
        const user = await user_banking.Create(req.body)
        return res.status(201).send(user)
    }catch(err){
        return res.status(500).send({message: err.message});
    }
})
module.exports = router;
router.get("/users/:id", async(req,res)=>{
    try{
        const bank = await user_banking.findById(req.params.id).lean().exec()
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