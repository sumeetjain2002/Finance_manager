const mongoose = require('mongoose');
const user = require('../models/user');

module.exports.postLogin = async(req, res, next) => {
    const {name,password}=req.body;
    try{
        await user.create({
           username:name,password,

           email:"sumeet@gmail.com",
              statement:{
                transactionId:1,
                amount:10000,
                type:"credit",
                description:"Len den huya"
              }                              // custom data

        });}

        catch(err){
            next(err);
        }
    res.redirect('/user/profile');}

module.exports.getProfile = async(req, res, next) => {
    try{
        const data = await user.find();
        console.log(data[1].username);
        res.render('profile',{data});
    }
    catch(err){
        next(err);
    }
}