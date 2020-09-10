const express = require('express');
const router = express.Router();
const userOrder = require('../models/addUserOrder');
const cartItem = require('../models/addToCartSchema');
const nodemailer = require('nodemailer');
require('dotenv').config();

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
              user: process.env.EMAIL,
              pass: process.env.PASSWORD
            }
        });
    
        var mailOptions = {
            from: 'lluminexbookshop96test@gmail.com',
            to: req.body.userEmail,
            subject: 'Your order detais',
            text: `Dear Customer \n Thankyou for placing order through Luminex Book Shop. Customer name and delivery address are bellow , 
            \n\ncustomer name: ${req.body.userName} \n Address: ${req.body.userAddress} \n city: ${req.body.userCity}\n state: ${req.body.userState} \n
            Full Amount: ${req.body.totalAmount} LKR \n Description: ${req.body.userOrder}\n\n we will deliver this order within 5 working days!\n\nThank You Come again...`
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

router.get('/', async (req, res) =>{
  let getOrder = await userOrder.find();
  res.send(getOrder);
  console.log(getOrder);
  });
  

module.exports = router;