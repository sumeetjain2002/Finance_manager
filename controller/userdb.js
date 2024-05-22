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

    res.render('profile',{name});

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
