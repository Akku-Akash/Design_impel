const { default: mongoose } = require("mongoose");

const productSchema = new mongoose.Schema(
    {
        image : {type : String, required : true},
        name : {type : String, required : true},
        brand : {type : String, required : true},
        description : {type : String, required : true},

    },{
        versionKey: false,
        timestamps : true
    }
)
module.exports = mongoose.model("product", productSchema)