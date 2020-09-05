const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const home = require('./routes/Home');
const admin = require('./routes/admin');
const log = require('./middlewares/log');
const adminJob = require('./routes/admin');
const cart = require('./routes/Cart');
const app = express();
const morgan = require('morgan');
const PORT = 5000;

app.use(express.json());
app.use(cors());
app.use(log);
app.use(morgan('dev'));
app.use('/api/home', home);
app.use('/api/admin',adminJob);
app.use('/api/home/cart', cart);

mongoose
.connect("mongodb://localhost/LuminexBookShopDB",{useNewUrlParser:true , useUnifiedTopology: true})
.then(()=>console.log("connetion is success"))
.catch(err=> console.log("connection error ", err));


app.listen(PORT, function(){
    console.log("Listening in port : " +PORT);
});

