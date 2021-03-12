const mongoose = require('mongoose');
const { schema } = require('./user');

const ItemSchema = mongoose.Schema({
    name: String,
    description: String,
    price: String
})


var Item = mongoose.model('item', ItemSchema);

module.exports = Item