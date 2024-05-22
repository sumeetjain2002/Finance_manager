const mongoose = require('mongoose');
const user = require('../models/userdb');

module.exports.isExist = async (req, res, next) => {
    const { name, email } = req.body;
  
    const data = await user.find();
  
    let userFound = false;
  
    if (data.length === 0) {
      return next;
    }
  
    for (let i = 0; i < data.length; i++) {
      if (data[i].username === name) {
        userFound = true;
        break; // Exit the loop once a match is found
      }
    }
  
    if (userFound) {
      // Redirect to profile if a match is found
      res.redirect('/user/profile');
    } else {
      return next;
    }
  };
