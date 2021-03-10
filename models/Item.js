const mongoose = require('mongoose');

const ItemSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    price: {
        type:String,
        required: true
    }
})


module.exports = mongoose.model('Items', ItemSchema)