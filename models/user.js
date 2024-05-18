const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    username: {
        type: String,
        required:true
    },
    contactNumber: {
        type: String,
        required:true
    },
    password: String,
    email:String
})