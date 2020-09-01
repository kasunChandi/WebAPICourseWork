const express = require('express');
const http = require('http');
const Item = require('../models/itemSchema');
const { send } = require('process');
const admin = express(); 
const adminJob = express.Router();

//still working on it. Will update soon

adminJob.get('/',(req,res) => //welcome Admin
{
    res.send("Welocme Admin"); 
});

adminJob.get('/items', async (req,res) =>  // getting all available items
{   
    try
    {
        let items = await Item.find().sort({itemCode : 'asc'});
        res.send(items);
    }
    catch(e)
    {
        return res.status(200).send(e.message);
    }
    
});

adminJob.get('/items/:itemId', async (req,res) =>  // getting specific item
{
    let item = await Item.findById(req.params.itemId);

    if(!item)
    {
        res.status(404).send("given Code does not Exist in the Server");
    }
    res.send(item);
});


adminJob.post('/items', async (req,res) =>
{   
    if(!req.body.itemName)
    {
        res.status(400).send("Make sure to fill all the requirements");
    }
    try
    {
        let itemToDb = new Item
        ({
            itemCode : req.body.itemCode,
            itemName : req.body.itemName,
            author   : req.body.author,
            itemDescription : req.body.itemDescription,
            imgUrl   : req.body.imgUrl,
            itemQty  : req.body.itemQty,
            itemPrice: req.body.itemPrice, 
            Currencytype: req.body.Currencytype,
            likeCount : req.body.likeCount
        });
        itemToDb = await itemToDb.save();
        res.send(itemToDb);
    }
    catch(e)
    {
        return res.status(200).send(e.message);
    }
});


adminJob.put('/items/:itemId', async (req,res) =>
{
    let item = await Item.findByIdAndUpdate (
        { _id : req.params.itemId },
        { $set : { itemName : req.body.itemName }},
        { new : true, useFindAndModify : false }
    )
    res.send(item);
});


adminJob.delete('/items/:itemId', async (req,res) =>
{
    let item = await Item.findOneAndDelete({_id : req.params.itemId})

    if(!item)
    {
        res.status(404).send("The ID is not Exist in the Server");
    }
    res.send(item); 

});

module.exports = adminJob;