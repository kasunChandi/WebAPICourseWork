const express = require('express');
const http = require('http');
const mongoose = require('mongoose');
const admin = express();  // check on it. not sure if this is correct. should it be router?
const PORT = 5000;

//still working on it. Will update soon

admin.get('/admin/books/',(req,res) =>
{
    //required code to get the books details
});
admin.get('/admin/books/:itemId',(req,res) =>
{
    //required code to get a perameter value from the list
});


admin.post('admin/books/',(req,res) =>
{
    //required code to insert new entity
});


admin.put('admin/books/:itemId',(req,res) =>
{
    //required code for the update of an entitiy
});


admin.delete('admin/books/:itemId',(req,res) =>
{
    //required code for the deletion of an Item
});

admin.listen(PORT,function()
{
    console.log("Listening in port : " +PORT);
});