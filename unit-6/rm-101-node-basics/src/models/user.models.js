const mongoose = require("mongoose")

const userSchema = new mongoose.Schema(
    { 
        id : {type : Number, require : true},
        first_name: {type : String, require : true},
        last_name: {type : String, require : true},
        email:{type : String, require : true},
        gender: {type : String, require : true},
        ip_address: {type : String, require : true},
        age: {type : Number, require : true}

    },{
        timestamps : true,
        versionKey : false
       
    }
)
module.exports = mongoose.model("user", userSchema)

