const User = require('../models/userdb');

const bcrypt = require('bcrypt');
module.exports = async function checkUser(username, password,user,req,res) {

    const match = await bcrypt.compare(password, user.password);

    if(match) {
        const data=await User.findOne({username});
        req.session.email=data.email;
        req.session.username = user.username;
       return res.redirect('/user/profile');
    }

    else{
       return  res.render('login', {
        msg: "Enter correct credentials"
    })
}
}