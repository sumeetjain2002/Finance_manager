const mongoose = require('mongoose');
const { Schema } = mongoose;

const trans = new Schema({
    username: {
        type: String,
        required:true
    },
    email:String,

    statement: [{  //array of objects
        category:
        {
           type:"String",
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


    }]
})

module.exports = mongoose.model('lendendb', trans);   // isse collection name ban jayega user naam ka