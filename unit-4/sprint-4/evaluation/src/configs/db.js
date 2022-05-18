const mongoose = require("mongoose")

module.exports = ()=>{
    return mongoose.connect("mongodb+srv://akash:akash_123@cluster0.3fziy.mongodb.net/test")
}