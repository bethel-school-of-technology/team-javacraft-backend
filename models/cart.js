const mongoose = require('mongoose');

const CartSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    price: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: false
    }
});

var Cart = mongoose.model('cart', CartSchema)

module.exports = Cart