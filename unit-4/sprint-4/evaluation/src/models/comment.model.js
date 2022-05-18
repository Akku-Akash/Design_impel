const mongoose = require("mongoose")

const CommentSchema = new mongoose.Schema(
    {
        body : {type: String, required: false},
    },
    {
        versionKey:false,
        timestamps:true
    }
)

module.exports = mongoose.model("CommentLike", CommentSchema)