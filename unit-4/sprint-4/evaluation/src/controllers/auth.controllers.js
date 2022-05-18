require("dotenv").config()
const jwt = require("jsonwebtoken");
const User = require("../models/user.model")

const newToken = (user) =>{
    return jwt.sign({user}, process.env.JWT_SECRET_KEY)
}

const register = async(req,res)=>{
    try{
        let user = await User.findOne({email : req.body.email}).lean().exec()

        if(user) return res.status(400).send({message: "please try with another email"})
        user = await User.find.create(req.body)
        const token = newToken(user)
        res.send({user,token})

    }catch(err){
        res.status(500).send(err.message)
    }
}

const login = async(req,res)=>{
    try{
        const user = await User.findOne({email:req.body.email})
 if(!user) return res.status(400).send({message: "please try from different email or passwpord"})
 const match = User.checkPass(req.body.password)
 if(!match) return res.status(600).send({message: " please try from diff email or pass"})

 const token = newToken(user)
 return res.send({user,token})
    }catch(err){
        res.status(500).send(err.message)
    }
}
