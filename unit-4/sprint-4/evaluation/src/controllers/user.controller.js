const {body, validationResult} = require("express-validator")

const express = require("express")

const User = require("../models/user.model");
const router = express.Router();

router.post(
    "",
    body("firstname").isString().isLowercase().isLength({min:3, max:30}).withMessage("Enter the valid name"),
    body("lastname").isString().isLowercase().isLength({min:3, max:30}).withMessage("Enter the valid name"),
    body("age").isAlphanumeric().isLength({min:1 , max:150}).withMessage("incorrect pattern"),
    body("email").isEmail().withMessage("Invalid E-Mail"),


async(req,res)=>{
    try{
const errors = validationResult(req)
if(!errors.isEmpty()){
    return res.status(400).send({errors: errors.array})
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

module.exports = router