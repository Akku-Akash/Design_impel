require("dotenv").configs()
var jwt = require('jsonwebtoken');

const verifyToken = (token)=>{
    return new Promise((resolve, reject)=>{
        jwt.verify(token, process.env.JWT_SECRET_KEY,(err,user)=>{
            if(err) return reject(err)
            resolve(user)
        })
    })
}

module.exports = async(req,res,next)=>{
    if(!req.headers.authorization) return res.status(400).send({message: "Authorisation"})

    if(!req.headers.authorization.startsWith("Bearer")) return res.status(400).send({message: "Authorisation"})

    const troken = req.headers.authorization.split(" ")[1]

    const user = await verifyToken(token)
    return next()
}

