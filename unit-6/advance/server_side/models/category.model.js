const mongoose = require("mongoose");

categorySchema = new mongoose.Schema(
  {
    name: { type: String, require: true },
    parent_id:{
      type: mongoose.Schema.Types.ObjectId,
      default: null,
      ref: 'Category'
    },
    ancestor : [{
      _id: {
         type: mongoose.Schema.Types.ObjectId,
         ref: "Category",
         index: true
        }
      }]
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("category", categorySchema);
