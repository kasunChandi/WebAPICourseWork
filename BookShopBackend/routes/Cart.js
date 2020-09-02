const express = require('express');
const router = express.Router();
const cartItem = require('../models/addToCartSchema');

router.post('/', async (req, res) => {
    try{
        let itemToBeAdded = new cartItem({
            userid: req.body.userid,
            itemCode: req.body.itemCode,
            itemName: req.body.itemName,
            itemQty: req.body.itemQty,
            itemPrice: req.body.itemPrice,
        });

        itemToBeAdded = await itemToBeAdded.save();
        res.send(itemToBeAdded);

    } catch (e) {
        return res.status(500).send(e.message);
    }
});

router.get('/:userid', async (req, res) => {
    try{
        let { title } = req.params.userid
        let item = await cartItem.find({ title: {$eq: title}});

        if(!item) {
            res.status(404).send("There is no item added into the cart by given id");
        }
        res.send(item);
    } catch (e) {
        return res.status(500).send(e.message);
    }
    
});

module.exports = router;