const mongoose = require('mongoose');
const user = require('../models/userdb');

module.exports.isNew = async (req) => {

    const { email,name } = req.body;
    console.log(email);
    const data = await user.find({email});
    console.log(data);

    if(data.length>0){
        console.log("User already exist");
        
        return false;
    }
    else{
        console.log("User does not exist");
        return true;
    }
}