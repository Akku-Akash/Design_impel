const mongoose = require("mongoose")

const PostLikeSchema = new mongoose.Schema(
    {
        postId : {type: Number, required: false},
        userId :  {type: Number,  required:false},
    },
    {
        versionKey:false,
        timestamps:true
    }
)

module.exports = mongoose.model("PostLike", PostLikeSchema)



