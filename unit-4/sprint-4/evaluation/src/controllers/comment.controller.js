const {body, validationResult} = require("express-validator")

const express = require("express")

const comment = require("../models/comment.model");
const router = express.Router();

// router.post(
//     "",


// async(req,res)=>{
//     try{
//     const errors = validationResult(req)
//     console.log(body("id"));
// if(!errors.isEmpty()){
//     return res.status(400).send({errors: errors.array()})
// }
// return res.send("users")
//     }catch(err){
//         res.status(500).send({message:err.message})
//     }
// })

router.post("", async(req,res)=>{
    try{
        const comment = await comment.create(req.body)
        return res.status(200).send(comment)
    }catch(err){
        return res.status(500).send({message: err.message})
    }
})

module.exports = router