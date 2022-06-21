const express = require("express")

const User = require("../models/user.models")
const router = express.Router()

router.get("/users", async (req,res)=>{
    try{
        const user = await User.find().lean().exec()
       res.status(200).send(user)

    }catch(err){
         res.status(500).send({message : err.message})
    }
})
router.get("/users/:id", async (req, res) => {
    try {
      const users = await User.findById(req.params.id).lean().exec();
      res.status(200).send(users);
    } catch (err) {
      res.status(500).send(err.message);
    }
  });
router.post("/users", async (req,res)=>{
    try{
     
         const user = await User.create(req.body)
      
          res.status(200).send(user)
    }catch(err){
         res.status(500).send({message : err.message})
    }
})
module.exports = router;