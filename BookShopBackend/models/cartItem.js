const mongoose = require ('mongoose');

const itemSchema = new mongoose.Schema({

    itemCode:{
        type: String,
        maxlength :5,
        minlength :4,
        required :true
    },
    itemName:{
        type :String,
        maxlength :20,
        minlength :4,
        required : true
    },
    itemaDisCription:{
        type : String,
        maxlength : 50,
        required : true
    },
    imgUrl:{
        type : String,
        default : "img need to add"
    
        },
    itemQty:Number,

    
    itemPrce: Number,
    Currencytype:{
        type: String,
        default: " LKR"

    }



});


let cartItem = mongoose.model("Item", itemSchema);
module.exports = cartItem;