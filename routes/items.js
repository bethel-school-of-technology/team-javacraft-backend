var express = require('express');
var router = express.Router();
const Item = require('../models/Item');

//GET ALL ITEMS
router.get('/', async (req, res) => {
    try {
        const items = await Item.find();
        res.json(items);
    } catch (err) {
        res.json({ message: err });
    }
});

router.get('/breakfast', async (req, res) => {
    try {
        const items = await Item.find({ category: "breakfast" });
        res.json(items);
    } catch (err) {
        res.json({ message: err });
    }
});

router.get('/lunch', async (req, res) => {
    try {
        const items = await Item.find({ category: "lunch" });
        res.json(items);
    } catch (err) {
        res.json({ message: err });
    }
});

router.get('/dinner', async (req, res) => {
    try {
        const items = await Item.find({ category: "dinner" });
        res.json(items);
    } catch (err) {
        res.json({ message: err });
    }
});

router.get('/dessert', async (req, res) => {
    try {
        const items = await Item.find({ category: "dessert" });
        res.json(items);
    } catch (err) {
        res.json({ message: err });
    }
});

//GET SPECIFIC ITEMS
router.get('/:itemId', async (req, res) => {
    try{
        const item = await Item.findById(req.params.itemId);
        res.json(item);
    } catch (err) {
        res.json({ message : err })
    }
});


//POST REQUESTS
router.post('/', async (req, res) => {
    const newItem = new Item({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price
    });
    try{
        const savedItem = await newItem.save();
        res.json(savedItem);
    } catch (err) {
        res.json({ message: err })
    }
});

router.post('/breakfast', async (req, res) => {
    const newItem = new Item({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        category: "breakfast"
    });
    try{
        const savedItem = await newItem.save();
        res.json(savedItem);
    } catch (err) {
        res.json({ message: err })
    }
});

router.post('/lunch', async (req, res) => {
    const newItem = new Item({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        category: "lunch"
    });
    try{
        const savedItem = await newItem.save();
        res.json(savedItem);
    } catch (err) {
        res.json({ message: err })
    }
});

router.post('/dinner', async (req, res) => {
    const newItem = new Item({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        category: "dinner"
    });
    try{
        const savedItem = await newItem.save();
        res.json(savedItem);
    } catch (err) {
        res.json({ message: err })
    }
});

router.post('/dessert', async (req, res) => {
    const newItem = new Item({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        category: "dessert"
    });
    try{
        const savedItem = await newItem.save();
        res.json(savedItem);
    } catch (err) {
        res.json({ message: err })
    }
});

//UPDATE AN ITEM
router.patch('/:itemId', async (req, res) => {
    try {
        const updatedItem = await Item.updateOne(
            { _id: req.params.itemId },
            { $set: { name: req.body.name } }
            ); 
        res.json(updatedItem)   
    } catch (err) {
        res.json({ message: err });
    }
});

//DELETE ITEM BY ID
router.delete('/:itemId', async (req, res) => {
    try {
        const removedItem = await Item.remove({ _id: req.params.itemId }); 
        res.json(removedItem)   
    } catch (err) {
        res.json({ message: err });
    }
});

module.exports = router;