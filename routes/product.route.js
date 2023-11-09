const express = require("express");
const mongoose = require('mongoose');
const Product = require("../models/product.model");


const {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/product.controller");


const router = express.Router();


/* Creating the routes for the product controller. */
router.get("/products", getProducts);
router.get("/products/:id", getProduct);
router.post("/products", createProduct);
router.put("/products/:id", updateProduct);
router.delete("/products/:id", deleteProduct);


module.exports = router;