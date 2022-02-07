const mongoose = require("mongoose")
const bankingSchema = new mongoose.Schema(
    {
        first_name: {type : String, required: true},
        middle_name: {type : String, required: false},
        last_name : {type : String, required: true},
        age : {type: Number, required: true},
        email: {type: String, required: true},
        address : {type: String, required: true},
        gender: {type:String, required: false, default: "Female"},
        type: {type: String, required: false}


    },
    {
  versionKey: false,
  timestamps: true,
    }
);
module.exports = mongoose.model("Banking", bankingSchema)