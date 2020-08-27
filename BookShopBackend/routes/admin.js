const express = require('express');
const http = require('http');
const mongoose = require('mongoose');
const admin = express(); 
const Item = require('../models/itemSchema');
const { send } = require('process');
const Admin = express.Router();

//still working on it. Will update soon

admin.get('/',(req,res) =>
{
    res.send("Welocme Admin"); //to test if app pass to admin
});

admin.get('/items',async (req,res) =>
{
    let items = await Item.find();
    res.send(items);
});

admin.get('/items/:itemId',(req,res) =>
{
    //required code to get a perameter value from the list
});


admin.post('/items',(req,res) =>
{   
    //required code to insert new entity
});


admin.put('/items/:itemId',(req,res) =>
{
    //required code for the update of an entitiy
});


admin.delete('/items/:itemId',(req,res) =>
{
    //required code for the deletion of an Item
});

module.exports = admin;