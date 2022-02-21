const mongoose = require("mongoose")

const PostSchema = new mongoose.Schema(
    {
        body :   {type: String, required: false},
        likes :  {type: Number,  required:true},
        image:   {type: String,  required:false},
    },
    {
        versionKey:false,
        timestamps:true
    }
)

module.exports = mongoose.model("Post", PostSchema)