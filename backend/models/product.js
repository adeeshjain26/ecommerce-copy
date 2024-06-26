// server/models/Product.js

const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String },
  brandName: { type: String },
  colours: { type: [String] },
  availableSizes: { type: [String] },
  productDetails: { type: [String] },
  images: { type: [String] },
});

module.exports = mongoose.model('Product', productSchema);
