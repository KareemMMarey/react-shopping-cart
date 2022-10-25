const orderSchema = require('../schema/orderSchema');
const mongoose = require('mongoose');
const Order =mongoose.model('order',orderSchema)

module.exports = Order;