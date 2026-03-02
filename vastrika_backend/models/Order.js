const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  items: [
    {
      name: String,
      price: Number,
      quantity: Number,
      image: String
    }
  ],
  totalAmount: Number,
  address: String,
  paymentMethod: {
    type: String,
    enum: ["Cash on Delivery", "UPI", "Credit/Debit Card", "Net Banking"],
    default: "Cash on Delivery",
  },
}, { timestamps: true });

module.exports = mongoose.model("Order", orderSchema);
