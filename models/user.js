const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    username: {
        type: String,
        required:true
    },

    password: String,
    email:String,

    statement:  {
        transactionId:{
            type: Number,
            required:true   
        },
        amount:{
            type: Number,
            required:true
        },
        date:{
            type: Date,
            default: Date.now
        },
        type:{             //credit or debit
            type: String,
            required:true
        },
        description:{       //salary, rent, etc
            type: String,
            required:true
        }


    }
})

module.exports = mongoose.model('testing', userSchema);