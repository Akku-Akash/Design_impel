const { default: mongoose } = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        title : {
            type : String,
            required : true
        },
        price : {
            type : Number,
            required : true
        },
        description : {
            type : String,
            required : true
        },
        category : {
            type : String,
            required : true
        },
        image : {
            type : String,
            required : true
        }

    },
    {
          versionKey : false,
          timestamps : true,
    }
)
module.exports = mongoose.model("Products", userSchema)