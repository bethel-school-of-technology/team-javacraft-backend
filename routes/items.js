var express = require('express');
var router = express.Router();
var Item = require('../models/Item');

//GET REQUESTS
router.get('/', (req, res) => {
    console.log(req.body)
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


//POST REQUESTS
router.post('/test', (req, res) => {
    console.log(req.body)
}); 

router.post('/', async (req, res) => {
    var post = new Item({
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

router.post('/breakfast', async (req, res) => {
    var post = new Item({
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