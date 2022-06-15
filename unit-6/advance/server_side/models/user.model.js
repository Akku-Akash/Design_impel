const mongoose = require("mongoose");
const addressSchema = new mongoose.Schema({
  city: {type: String},
  street: {type: String},
  houseNumber: {type: String}
},
{
  timestamps: true,
  versionKey: false,
}
)

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    age: { type: Number, required: true },
    email: { type: String, required: true },
    addresses: 
      { 
        _id : true,
        addressLine : addressSchema,
        type : Array,
        index : true,
      }
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
userSchema.index({addresses : 1,name : 1});

module.exports = mongoose.model("users", userSchema);
