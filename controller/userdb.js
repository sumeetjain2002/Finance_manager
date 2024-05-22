const mongoose = require('mongoose');
const user = require('../models/userdb');
const { isExist } = require('../middlewares/isExist');
const transaction = require('../models/transaction');
const bcrypt=require('bcrypt')


module.exports.postLogin = async(req, res, next) => {
    const {name,email}=req.body;
    
    try{
        
        if(isExist(req)){
            console.log(name);
            await user.create({
                username:name,
                email                     
            });


        }
    }

    catch(err){
        next(err);
    }

    res.render('profile');}


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
