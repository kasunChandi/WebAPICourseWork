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
    var Query = { userid : req.params.userid}
    cartItem.find(Query).exec((error,data) => {
        if(error) {
            return next (error)
        } else {
            res.json(data)
        }
    })
});

router.delete('/:cartitemid', async (req, res) => {
    try{
        let item = await cartItem.findOneAndDelete({_id: req.params.cartitemid});
        res.send(item);
    } catch(e) {
        return res.status(500).send(e.message);
    }
    
})

module.exports = router;