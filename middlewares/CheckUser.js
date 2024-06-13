const bcrypt = require('bcrypt');
module.exports = async function checkUser(username, password,user,req,res) {

    const match = await bcrypt.compare(password, user.password);

    if(match) {
       return res.render('profile',{name:username});
    }

    else{
       return  res.render('login', {
        msg: "Enter correct credentials"
    })
}
}