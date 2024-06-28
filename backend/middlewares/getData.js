const transactions = require('../models/transaction');

module.exports = async function getData(req, res, email) {
    try {
        const data = await transactions.find({email});
       arr=data[0].statement.map((item)=>{
        return item;
       })
       console.log("array ki items ------------------>", arr);
       return arr;
    } catch (err) {
        console.log(err);
    }
}