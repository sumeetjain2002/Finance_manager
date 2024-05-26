const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    username: {
        type: String,
        required:true
    },
    email:{
        type: String,
        required:true
    },
    password:{
        type: String
    },
    googleAccessToken: String,
    googleId: String,
    googleImg: String
})

module.exports = mongoose.model('users', userSchema);   // isse collection name ban jayega user naam ka