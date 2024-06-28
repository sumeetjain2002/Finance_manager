const mongoose = require('mongoose');
const User = require('../models/userdb');
const { isNew } = require('../middlewares/isNew');
const transaction = require('../models/transaction');
const bcrypt=require('bcrypt')
const saltRounds = 10;
const checkUser = require('../middlewares/CheckUser');
const logout=require('../middlewares/logout');   //acquired logout middleware 

module.exports.postSignup = async(req, res, next) => {      
    if(req.session.username) return res.redirect('/user/profile');  

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
            checkUser(username, password,user,req,res);    // middleware
        }

        
    }

module.exports.getProfile = async(req, res, next) => {
    try{
        const data= req.session.username;
        req.session.save();

        res.render('profile',{name:data});
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
    console.log("fillout ka hai yeh");
    const email=req.session.email; 
    const name = req.session.username;
    const data = await transaction.find({email});
    if(data)
    {
        try{
        await transaction.updateOne({email}, {$push: {statement:[{
                    category,
                    amount,
                    type:account,
                    description
                }
            ]}},{upsert:true});
        
        console.log("Data saved");
        res.render('profile',{name});
    }

    catch(err){
        next(err);
    }
}
    else 
    {
        await transaction.create({
                username:name,
                email,
                statement:[{
                    category,
                    amount,
                    type:account,
                    description
                }]
            });
    }



 }

 const exportdata=require("../middlewares/exportdata");
 module.exports.getLogout= async(req,res,next)=>
    {
        console.log("logout done");
        exportdata();
        logout(req);  
        
        res.redirect('/');
    }