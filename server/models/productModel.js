const productSchema = require('../schema/productSchema');
const mongoose = require('mongoose');
const Product =mongoose.model('product',productSchema)

module.exports = Product;