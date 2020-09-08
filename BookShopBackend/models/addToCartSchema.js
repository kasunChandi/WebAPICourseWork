const mongoose = require ('mongoose');

const cartSchema = new mongoose.Schema({

    userid:{
        type: String,
        maxlength: 50,
        required:true
    },
    itemCode:{
        type: String,
        maxlength: 5,
        minlength: 4,
        required: true
    },
    itemName:{
        type: String,
        maxlength: 100,
        minlength: 4,
        required: true
    },
    itemPrice: Number,
    Currencytype:{
        type: String,
        default: " LKR"

    },
    itemQty:{
        type: Number,
        default: 1,
        required: true
    }

});

let cartItem = mongoose.model("CartItem", cartSchema);
module.exports = cartItem;