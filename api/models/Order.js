const { default: mongoose } = require("mongoose");

const orderSchema = new mongoose.Schema({
  userEmail: String,
  total: Number,
  items: [
    {
      name: String,
      quantity: Number,
      price: Number,
    },
  ],
  orderDate: Date,
});

const OrderModel = mongoose.model("order", orderSchema);
module.exports = OrderModel;