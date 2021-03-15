var express = require('express');
var router = express.Router();
const Cart = require('../models/Cart');

//GET ALL ITEMS
router.get('/', async (req, res) => {
    try {
        const carts = await Cart.find();
        res.json(carts);
    } catch (err) {
        res.json({ message: err });
    }
});

//GET SPECIFIC ITEMS
router.get('/:CartId', async (req, res) => {
    try{
        const cart = await Cart.findById(req.params.cartId);
        res.json(cart);
    } catch (err) {
        res.json({ message : err })
    }
});


//POST REQUESTS
router.post('/', async (req, res) => {
    const newCart = new Cart({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price
    });
    try{
        const savedCart = await newCart.save();
        res.json(savedCart);
    } catch (err) {
        res.json({ message: err })
    }
});


//UPDATE AN ITEM
router.patch('/:cartId', async (req, res) => {
    try {
        const updatedCart = await Cart.updateOne(
            { _id: req.params.cartId },
            { $set: { name: req.body.name } }
            ); 
        res.json(updatedCart)   
    } catch (err) {
        res.json({ message: err });
    }
});

//DELETE ITEM BY ID
router.delete('/:cartId', async (req, res) => {
    try {
        const removedCart = await Cart.remove({ _id: req.params.cartId }); 
        res.json(removedCart)   
    } catch (err) {
        res.json({ message: err });
    }
});

module.exports = router;