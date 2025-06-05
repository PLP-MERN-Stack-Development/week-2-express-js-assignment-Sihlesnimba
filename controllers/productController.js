
const { products, generateId } = require('../models/productStore');
const { NotFoundError } = require('../utils/customErrors');
function getProducts(req, res) {
  let result = [...products];
  const { category, page = 1, limit = 5 } = req.query;
  if (category) result = result.filter(p => p.category === category);
  const start = (page - 1) * limit;
  const end = start + parseInt(limit);
  res.json(result.slice(start, end));
}
function getProduct(req, res, next) {
  const product = products.find(p => p.id === req.params.id);
  if (!product) return next(new NotFoundError('Product not found'));
  res.json(product);
}
function createProduct(req, res) {
  const product = { id: generateId(), ...req.body };
  products.push(product);
  res.status(201).json(product);
}
function updateProduct(req, res, next) {
  const index = products.findIndex(p => p.id === req.params.id);
  if (index === -1) return next(new NotFoundError('Product not found'));
  products[index] = { ...products[index], ...req.body };
  res.json(products[index]);
}
function deleteProduct(req, res, next) {
  const index = products.findIndex(p => p.id === req.params.id);
  if (index === -1) return next(new NotFoundError('Product not found'));
  products.splice(index, 1);
  res.status(204).send();
}
function searchProducts(req, res) {
  const { name } = req.query;
  const result = products.filter(p => p.name.toLowerCase().includes(name.toLowerCase()));
  res.json(result);
}
function productStats(req, res) {
  const stats = {};
  for (let p of products) {
    stats[p.category] = (stats[p.category] || 0) + 1;
  }
  res.json(stats);
}
module.exports = {
  getProducts, getProduct, createProduct, updateProduct,
  deleteProduct, searchProducts, productStats
};
