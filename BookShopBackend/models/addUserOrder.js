const mongoose = require ('mongoose');

const userSchema = new mongoose.Schema({

    userid:{
        type: String,
        maxlength: 50,
        required:true
    },
    userName:{
        type: String,
        maxlength: 20,
        minlength: 4,
        required: true
    },
    userEmail:{
        type: String,
        maxlength: 100,
        minlength: 4,
        required: true
    },
    userAddress:{
        type: String,
        maxlength: 100,
        minlength: 4,
        required: true
    },
    userCity:{
        type: String,
        maxlength: 100,
    },
    userState:{
        type: String,
        maxlength: 100,
        minlength: 4,
        required: true
    },
    userZip: {
    type: String,
    maxlength: 100,
    minlength: 4,
    required: true
    },
    totalAmount: Number,
    userOrder: []

});

let userOrder = mongoose.model("UserOrder", userSchema);
module.exports = userOrder;