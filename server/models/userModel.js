const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const productSchema = new mongoose.Schema({
  product_name: { type: String, required: true },
  from: { type: String, required: true },
  to: { type: String, required: true },
  weight: { type: mongoose.Schema.Types.Decimal128, required: true },
  dimensions: {
    length: { type: Number, required: true },
    width: { type: Number, required: true },
    height: { type: Number, required: true }
  }
});

const historySchema = new mongoose.Schema({
  client: { type: String, required: true },
  delivered: { type: Date, default: Date.now, required: true },
  product: { type: productSchema, required: true } // Corrected product reference
});

const userSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  phone: {
    type: Number,
    required: true,
    unique: true
  },
  history: [historySchema] // Array of history subdocuments
});

const User = mongoose.model("User", userSchema);
const Product = mongoose.model("Product", productSchema);

module.exports = { User, Product };
