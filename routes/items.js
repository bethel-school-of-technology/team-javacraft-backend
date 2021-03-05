var express = require('express');
var router = express.Router();
var item = require('../models/item');

router.get('/', (req, res) => {
    res.send(req.body)
});

router.post('/', async (req, res) => {
    var post = new item({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price
    });
    try{
        var savedItem = await post.save();
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