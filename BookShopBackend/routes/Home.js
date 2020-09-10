const express = require("express");
const router = express.Router();
const Book = require("../models/itemSchema");

router.get("/", async (req, res) => {
 try{
  let itemList = await Book.find();
  res.send(itemList);
 }
  catch(e){
    return res.status(404).send(e.message);
  }
});

router.get("/:itemid", async (req, res) => {
  try {
    let book = await Book.findById(req.params.itemid);

    if (!book) {
      res.status(404).send("The given book does not exist on our server");
    }

    res.send(book);
  } catch (e) {
    return res.status(404).send(e.message);
  }
});

router.put("/:itemid", async (req, res) => {
  try {
    let book = await Book.findOneAndUpdate(
      { _id: req.params.itemid },
      { $set: { likeCount: req.body.likeCount } },
      { new: true, useFindAndModify: false }
    );
    res.send(book);
  } catch (e) {
    return res.status(500).send(e.message);
  }
});

router.post("/", async (req, res) => {
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
      itemPrice: req.body.itemPrice,
      likeCount: req.body.likeCount,
    });

    bookToBeAdded = await bookToBeAdded.save();
    res.send(bookToBeAdded);
  } catch (e) {
    return res.status(500).send(e.message);
  }
});

module.exports = router;
