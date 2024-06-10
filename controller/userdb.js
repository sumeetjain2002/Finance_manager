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
        return res.render('signup', {
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
        
        if(req.username) return res.redirect('profile');
        const { username, password } = req.body;

        let user = await User.findOne({ username });// $where
        if (!user) {                                     
        return res.render('login', {
            msg: "Enter correct credentials"
        })
            }
            else
            {
                res.render('profile',{name:username});
            }
    //bycrypt krenge password and then check krenge if it matches
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
    const {amount,category,description,account}=req.body;
    const email=req.session.email; 
    const name = req.session.user;
    console.log(req.session); //session is empty because cookie not added
    console.log(req.body);
    const data = await User.find({email});
    console.log(data); //session is not getting fetched that is why not getting email
                       // hence data is empty
   
    try{
        await transaction.create({
            username:name,
            email,
            statement:[{
                transactionId:Math.floor(Math.random()*1000),
                category,
                amount,
                type:account,
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