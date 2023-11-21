const Product = require("../models/productModel");

// create product --admin
exports.createProduct = async (req, res) => {
  const product = await Product.create(req.body);

  res.status(201).json({
    success: true,
    product,
  });
};

// get a product details
exports.getProductDetails = async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
    return res.status(500).json({
      success: false,
      message: "Product not found",
    });
  }
  return res.status(200).json({
    success: true,
    product,
  });
};

// get all products
exports.getAllProducts = async (req, res) => {
  const products = await Product.find();
  res.status(200).json({
    success: true,
    size: products.length,
    products,
  });
};

// update product
exports.updateProduct = async (req, res) => {
  let product = await Product.findById(req.params.id);
  if (!product) {
    return res.status(500).json({
      success: false,
      message: "Product not found",
    });
  }
  product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });
  return res.status(200).json({
    success: true,
    product,
  });
};

// delete a product
exports.deleteProduct = async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
    return res.status(500).json({
      success: false,
      message: "Product not found",
    });
  }
  await product.deleteOne();
  return res.status(200).json({
    success: true,
    message: "Product deleted successfully",
  });
};
