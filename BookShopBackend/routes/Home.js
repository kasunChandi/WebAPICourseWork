const express = require('express');
const router = express.Router();
const Book = require('../models/itemSchema');

router.get('/', async(req, res) =>{

    let itemList = await Book.find();
     res.send(itemList);
});

router.get('/:itemId', async (req, res) => {
    let book = await Book.findById(req.params.itemId);

    if (!book) {
        res.status(404).send("The given book does not exist on our server");
    }

    res.send(book);
});

router.post('/', async (req, res) => {

    if (!req.body.itemCode) {
        return res.status(400).send("Not all mandatory values have been set!");
    }

    try {
        let bookToBeAdded = new Book({
            itemCode: req.body.itemCode,
            itemName: req.body.itemName,
            author: req.body.author,
            itemDescription: req.body.itemDescription,
            imgUrl: req.body.imgUrl,
            itemQty: req.body.itemQty,
            itemPrice: req.body.itemPrice
        });

        bookToBeAdded = await bookToBeAdded.save();
        res.send(bookToBeAdded);
    } catch (e) {
        return res.status(500).send(e.message);
    }

});

module.exports = router;