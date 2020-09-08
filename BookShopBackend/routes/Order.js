const express = require('express');
const router = express.Router();
const userOrder = require('../models/addUserOrder');
const cartItem = require('../models/addToCartSchema');
const nodemailer = require('nodemailer');

router.post('/', async (req, res) => {
    try{
        let userToBeAdded = new userOrder({
            userid: req.body.userid,
            userName: req.body.userName,
            userEmail: req.body.userEmail,
            userAddress: req.body.userAddress,
            userCity: req.body.userCity,
            userState: req.body.userState,
            userZip: req.body.userZip,
            totalAmount: req.body.totalAmount,
            userOrder: req.body.userOrder
        });

        userToBeAdded = await userToBeAdded.save();
        res.send(userToBeAdded);

        //email
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: 'lluminexbookshop96test@gmail.com',
              pass: 'abc123@#'
            }
        });
    
        var mailOptions = {
            from: 'lluminexbookshop96test@gmail.com',
            to: req.body.userEmail,
            subject: 'Your order detais',
            text: `Thankyou for placing order through Luminex Book Shop. Customer name and delivery address are bellow , 
            \n\n ${req.body.userName} \n Address: ${req.body.userAddress} \n city: ${req.body.userCity}\n state: ${req.body.userState} \n
            Full Amount: ${req.body.totalAmount} LKR \n Description: ${req.body.userOrder}\n\nThank You Come again...`
          };
    
          transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log(error);
            } else {
              console.log('Email sent: ' + info.response);
            }
          });
    


    } catch (e) {
        return res.status(500).send(e.message);
    }
});

router.delete('/:userid', async(req,res) =>{
    try {
        let item = await cartItem.deleteMany({ userid: req.params.userid });
        res.send(item);
        console.log(item);
      } catch (e) {
        return res.status(500).send(e.message);
      }
});


module.exports = router;