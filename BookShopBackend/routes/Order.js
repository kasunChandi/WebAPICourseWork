const express = require('express');
const router = express.Router();
const userOrder = require('../models/addUserOrder');

router.post('/', async (req, res) => {
    try{
        let userToBeAdded = new userOrder({
            userid: req.body.userid,
            userName: req.body.userName,
            userEmail: req.body.userEmail,
            userAddress: req.body.userAddress,
            userState: req.body.userState,
            userZip: req.body.userZip,
            userOrder: req.body.userOrderItems
        });

        userToBeAdded = await userToBeAdded.save();
        res.send(userToBeAdded);

    } catch (e) {
        return res.status(500).send(e.message);
    }
});


module.exports = router;