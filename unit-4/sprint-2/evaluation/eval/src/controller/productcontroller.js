const express = require("express")
const user_banking = require("../models/productmodel")
const branch_banking = require("../models/productmodel")
const master_banking = require("../models/productmodel")
const saving_banking = require("../models/productmodel")
const fixed_banking = require("../models/productmodel")

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