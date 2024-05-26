const mongoose = require('mongoose');
const User = require('../models/userdb');
const { isNew } = require('../middlewares/isNew');
const transaction = require('../models/transaction');
const bcrypt=require('bcrypt')
const saltRounds = 10;

module.exports.postSignup = async(req, res, next) => {
    if(req.user) return res.redirect('/profile');

    const { username, password,email } = req.body;
    let user = await User.findOne({ email });
    if (user) {
        return res.render('404', {
            msg: "Email already exist in our system..."
        })
    }
   
   
    bcrypt.hash(password, saltRounds, async function (err, hash) {
        
        user = new User({
            username,
            email,
            password: hash
        })

        await user.save();

        res.redirect('/login');
    });

}

module.exports.postLogin=async(req,res,next)=>
    {
        if(req.user) return res.redirect('/profile');
        const { username, password } = req.body;

        let user = await User.findOne({ username });
        if (!user) {                                     
        return res.render('login', {
            msg: "Enter correct credentials"
        })
            }
    
    bcrypt.hash(password, saltRounds, async function (err, hash) {

        
    })
        
    }

module.exports.getProfile = async(req, res, next) => {
    try{
        const data = await User.find();
        
        res.render('profile',{data});
    }
    catch(err){
        next(err);
    }
}

module.exports.getFillout = (req, res, next) => {
    res.render('fillout');
}

module.exports.postFillout = async(req, res, next) => {   
    const {name,email,amount,description}=req.body;
   
    const data = await User.find({email});
    console.log(data);
   
    try{
        await transaction.create({
            username:name,
            email,
            statement:[{
                transactionId:Math.floor(Math.random()*1000),
                amount,
                type:"credit",
                description
            }]
        });
        await transaction.save();
        console.log("Data saved");
        res.render('profile',{name});
    }
    catch(err){
        next(err);
    }



 }