
const { v4: uuidv4 } = require('uuid');
let products = [];
module.exports = { products, generateId: () => uuidv4() };
