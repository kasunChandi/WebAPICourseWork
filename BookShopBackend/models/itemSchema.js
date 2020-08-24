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
        maxlength :100,
        minlength :4,
        required : true
    },
    author:{
        type: String,
        maxlength: 100,
        minlength: 10,
        required: true
    },
    itemDescription:{
        type : String,
        maxlength : 1000,
        required : true
    },
    imgUrl:{
        type : String,
        default : "img need to add"
    
        },
    itemQty:Number,

    itemPrice: Number,
    Currencytype:{
        type: String,
        default: " LKR"

    }

});

let Item = mongoose.model("Item", itemSchema);
module.exports = Item;