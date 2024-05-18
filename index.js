const path = require('path');
const express = require('express');
const app = express();
const port = 3000;
const base='http://localhost';
const hbs = require('hbs');
const mongoose = require('mongoose');
require('dotenv').config();

app.set("view engine", "hbs");
let getPath = (file)=>path.join(__dirname,file);
 // function to get path of file
 
// app.use(express.static(path.join(__dirname,'<folderName>')));
 // to serve static files/folders using middlewares

app.use(express.urlencoded({extended: true}));
//to read body of post request

const homeRouter = require('./routes/home');
app.use('/', homeRouter);
//homepage when server starts

// app.use('/', (req, res, next) => {
//     res.render('index');
    
// })
const userRouter = require('./routes/user');

mongoose.connect(process.env.mongo_URL).then(()=>
{
    app.listen(port,()=>{
        console.log(base+':'+port);
        });
})
.catch((err)=>console.log(err));





