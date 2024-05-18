const mongoose = require('mongoose');
const user = require('../models/transaction');

module.exports.postLogin = async(req, res, next) => {
    const {name,password}=req.body;

    try{
        const data = await user.find();
        for(let i=0;i<data.length;i++){
            if(data[i].username===name ){
                
                data[i].statement.push(
                    {
                        transactionId:2,
                        amount:1,
                        type:"debit",
                        description:"Len den huya"
                      }    );  
                await data[i].save(); 
                break;
                

            }
            await user.create({
           username:name,password,

           email:"sumeet@gmail.com",
            statement:{
                transactionId:1,
                amount:10000,
                type:"credit",
                description:"Len den huya"
              }                          // custom data

        });
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