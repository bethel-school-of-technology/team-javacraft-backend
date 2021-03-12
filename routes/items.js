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

router.get('/breakfast', (req, res) => {
    res.send(req.body)
});

router.get('/lunch', (req, res) => {
    res.send(req.body)
});

router.get('/dinner', (req, res) => {
    res.send(req.body)
});

router.get('/dessert', (req, res) => {
    res.send(req.body)
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
router.post('/test', (req, res) => {
    console.log(req.body)
}); 

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
        price: req.body.price
    });
    try{
        const savedItem = await newItem.save();
        res.json(savedItem);
    } catch (err) {
        res.json({ message: err })
    }
});

router.put('/', (req, res) => {
    res.send() 
});

router.delete('/', (req, res) => {
    res.send()
});

module.exports = router;