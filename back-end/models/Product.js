const { model, Schema } = require("mongoose");

const ProductSchema = new Schema({
  ProductName: {
    type: String,
    required: true,
  },
  Category: {
    type: String,
    required: true,
  },
  Price: {
    type: Number,
    required: true,
  },
  Description: {
    type: String,
    required: true,
  },

  // Favoris: {
  //   type: Boolean,
  //   // required: true,
  // },
});
const ProductModel = model("Product", ProductSchema);
module.exports = ProductModel;
