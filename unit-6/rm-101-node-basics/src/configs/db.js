const mongoose = require("mongoose")

module.exports=()=>{
    return mongoose.connect("mongodb+srv://Akash:Akash123@cluster0.styl68n.mongodb.net/test")   
}