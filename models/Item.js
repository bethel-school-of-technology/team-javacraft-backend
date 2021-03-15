const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
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

var Item = mongoose.model('item', ItemSchema)

module.exports = Item