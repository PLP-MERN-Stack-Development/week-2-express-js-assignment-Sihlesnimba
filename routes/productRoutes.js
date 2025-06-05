
const express = require('express');
const {
  getProducts, getProduct, createProduct, updateProduct,
  deleteProduct, searchProducts, productStats
} = require('../controllers/productController');
const authenticate = require('../middleware/authMiddleware');
const validateProduct = require('../middleware/validateProduct');
const router = express.Router();
router.get('/', getProducts);
router.get('/search', searchProducts);
router.get('/stats', productStats);
router.get('/:id', getProduct);
router.post('/', authenticate, validateProduct, createProduct);
router.put('/:id', authenticate, validateProduct, updateProduct);
router.delete('/:id', authenticate, deleteProduct);
module.exports = router;
