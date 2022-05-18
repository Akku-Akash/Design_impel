const {body, validationResult} = require("express-validator")

const express = require("express")

const User = require("../models/user.model");
const { query } = require("express");




const router = express.Router();

router.post(
    "",
    body("firstName").isString().isLowercase().isLength({min:3, max:30}).withMessage("Enter the valid name"),
    body("lastName").isString().isLowercase().isLength({min:3, max:30}).withMessage("Enter the valid name"),
    body("age").isAlphanumeric().isLength({min:1 , max:150}).withMessage("incorrect pattern"),
    body("email").isEmail().withMessage("Invalid E-Mail"),
    body("profileImages").isURL().isString().isLength({min:1, max:30}).withMessage("Invalid Url"),


async(req,res)=>{
    try{
    const errors = validationResult(req)
    console.log(body("id"));
if(!errors.isEmpty()){
    return res.status(400).send({errors: errors.array()})
}
return res.send("users")
    }catch(err){
        res.status(500).send({message:err.message})
    }
})

router.post("", async(req,res)=>{
    try{
        const user = await User.create(req.body)
        return res.status(200).send(user)
    }catch(err){
        return res.status(500).send({message: err.message})
    }
})
router.patch("/:id", async(req,res)=>{
    try{
        const user = await User.findByIdAndUpdate(req.params.id,req.body).lean().exec()
        return res.status(200).send(user)
    }catch(err){
        return res.status(500).send({message: err.message})
    }
})
router.delete("/:id", async(req,res)=>{
    try{
        const user = await User.findByIdAndDelete(req.params.id).lean().exec()
        return res.status(200).send(user)
    }catch(err){
        return res.status(500).send({message: err.message})
    }
})

const querry = require("express")
// user can see 10 at the time
router.get("", async(req,res)=>{
    try{
        const page = req.querry.page || 1
        const size = req.querry.size ||10
        const users = await User.find(query)
        .skip((page-1)*size)
        .limit(size).lean().exec()
        const totalPages = Math.ceil(
            (await User.find(querry).countDocuments())/size
        );
        return res.send({users, totalPages})

    }catch(err){
        return res.status(500).send({message: err.message})
    }
})



module.exports = router