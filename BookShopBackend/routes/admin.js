const express = require('express');
const http = require('http');
const Item = require('../models/itemSchema');
const { send } = require('process');
const admin = express(); 
const adminJob = express.Router();

//still working on it. Will update soon

adminJob.get('/',(req,res) =>
{
    res.send("Welocme Admin"); //to test if app pass to admin
});

adminJob.get('/items', async (req,res) =>
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

adminJob.get('/items/:itemCode', async (req,res) =>
{
    let item = await Item.find(req.params.itemCode);//need to find what is the value need to be pass to find the item from the list

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


adminJob.put('/items/:itemId',(req,res) =>
{
    //required code for the update of an entitiy
});


adminJob.delete('/items/:itemId',(req,res) =>
{
    //required code for the deletion of an Item
});

module.exports = adminJob;