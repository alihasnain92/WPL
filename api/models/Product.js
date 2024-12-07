const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  name: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
});

const ProductModel = mongoose.model("products", productSchema);

module.exports = ProductModel;
