const mongoose = require('mongoose');
const user = require('../models/userdb');
const { isNew } = require('../middlewares/isNew');
const transaction = require('../models/transaction');
const bcrypt=require('bcrypt')


module.exports.postLogin = async(req, res, next) => {
    const {name,email}=req.body;
    
    try{
        
        if(await isNew(req)){
            await user.create({
                username:name,
                email                     
            });

         console.log("User created");
        }
        else{
            
            next;
        }
    }

    catch(err){
        next(err);
    }

    res.render('profile',{name,req});

}


module.exports.getProfile = async(req, res, next) => {
    try{
        const data = await user.find();
        
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
   
    const data = await user.find({email});
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