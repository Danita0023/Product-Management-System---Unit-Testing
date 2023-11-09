const Product = require("../models/product.model");

// GET all products
const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products); // Fixed response object to 'products'
  } catch (error) {
    res.status(500).json(error);
  }
};

// Get product by ID
const getProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json(error);
  }
};

// POST a new product
const createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Edit existing product
const updateProduct = async (req, res) => {
  try {
    const product = await Product.findOneAndUpdate(
      { _id: req.params.id },
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Delete product by ID
const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};
