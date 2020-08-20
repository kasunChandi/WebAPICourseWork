const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const item = require('./routes/cartItems')
const app = express();
const PORT = 5000;

app.use(express.json());
app.use(cors());
app.use('/api/cartItems' , item);


mongoose
.connect("mongodb://localhost/LuminexBookShopDB",{useNewUrlParser:true , useUnifiedTopology: true})
.then(()=>console.log("connetion is success"))
.catch(err=> console.log("connection error ", err));


app.listen(PORT, function(){
    console.log("Listening in port : " +PORT);
});

