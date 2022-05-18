const {body, validationResult} = require("express-validator")

const express = require("express")

const PostLike = require("../models/postlikemodel");
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
        const postlike = await PostLike.create(req.body)
        return res.status(200).send(postlike)
    }catch(err){
        return res.status(500).send({message: err.message})
    }
})

module.exports = router