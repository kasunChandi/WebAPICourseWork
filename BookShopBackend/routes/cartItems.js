const express = require('express');
const router = express.Router();
const Item = require('../models/cartItem');

router.get('/',async(req, res) =>{

    let item = await Item.find();
    console.log(item);
     res.send(item);


});



module.exports = router;