const bcrypt = require('bcrypt');
module.exports = async function checkUser(username, password,user,req,res) {

    const match = await bcrypt.compare(password, user.password);

    if(match) {
        req.session.username = user.username;
       return res.redirect('/user/profile');
    }

    else{
       return  res.render('login', {
        msg: "Enter correct credentials"
    })
}
}