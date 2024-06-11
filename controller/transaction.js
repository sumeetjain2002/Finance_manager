const mongoose = require('mongoose');
const user = require('../models/transaction');

module.exports.postLogin = async(req, res, next) => {
    const {name,password}=req.body;
    try{
        const data = await user.find();
        
        if(data.length==0){
            await user.create({
                username:name,password,
        
                email:"sumeet@gmail.com",
                 statement:{
                     transactionId:1,
                     amount:1,
                     type:"credit",
                     description:"first user creation in arr"
                   }                          // custom data
        
             });
        }
        else{
            for(let i=0;i<data.length;i++){
                if(data[i].username===name ){
                    
                    data[i].statement.push(
                        {
                            transactionId:2,
                            amount:1,
                            type:"debit",
                            description:"for first"
                          }    );  
                    await data[i].save(); 
                    break;
                }
                
                else if(i+1==data.length){
                    await user.create({
                        username:name,password,
             
                        email:"sumeet@gmail.com",
                         statement:{
                             transactionId:1,
                             amount:1,
                             type:"credit",
                             description:"create userin for loop"
                           }                          // custom data
             
                     });
                }
                
        }
        }
    }

        catch(err){
            next(err);
        }
    res.redirect('/user/profile');}

module.exports.getProfile = async(req, res, next) => {
    try{
        const data = await user.find();
        console.log(data);
        res.render('profile',{data});
    }
    catch(err){
        next(err);
    }
}

module.exports.getDashboard = async (req, res, next) => {
    try {
        const data = await user.find({ username: "Aayush" });
        console.log(data[0].statement);
        let transac = data[0];
        res.render('dashboard',{transac});
    }
    catch (err) {
        next(err);
    }
}