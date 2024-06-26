const express = require('express');
const Product = require('../models/product');

const router = express.Router();

// Get all products
router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a new product
router.post('/', async (req, res) => {
  const product = new Product({
    brandName: req.body.brandName,
    productName: req.body.productName,
    price: req.body.price,
    colours: req.body.colours,
    availableSizes: req.body.availableSizes,
    productDetails: req.body.productDetails,
    images: req.body.images,
    category: req.body.category,
    description: req.body.description,
  });

  try {
    const newProduct = await product.save();
    res.status(201).json(newProduct);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Get a single product by ID
router.get('/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (product == null) {
      return res.status(404).json({ message: 'Cannot find product' });
    }
    res.json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Update a product
router.patch('/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (product == null) {
      return res.status(404).json({ message: 'Cannot find product' });
    }

    if (req.body.brandName != null) {
      product.brandName = req.body.brandName;
    }
    if (req.body.productName != null) {
      product.productName = req.body.productName;
    }
    if (req.body.price != null) {
      product.price = req.body.price;
    }
    if (req.body.colours != null) {
      product.colours = req.body.colours;
    }
    if (req.body.availableSizes != null) {
      product.availableSizes = req.body.availableSizes;
    }
    if (req.body.productDetails != null) {
      product.productDetails = req.body.productDetails;
    }
    if (req.body.images != null) {
      product.images = req.body.images;
    }
    if (req.body.category != null) {
      product.category = req.body.category;
    }
    if (req.body.description != null) {
      product.description = req.body.description;
    }

    const updatedProduct = await product.save();
    res.json(updatedProduct);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a product
router.delete('/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (product == null) {
      return res.status(404).json({ message: 'Cannot find product' });
    }

    await product.remove();
    res.json({ message: 'Deleted product' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
