const mongoose = require("mongoose");

productSchema = new mongoose.Schema(
  {
    title: { type: String, require: true },
    price: { type: Number, require: true },
    description: [{ type: String, require: true }],

    images_url: [{ type: String, require: true }],
    likes: { type: Number, require: false, default: 0 },

    brand_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "brand",
      required: true,
    },
    category_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "category",
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("product", productSchema);
