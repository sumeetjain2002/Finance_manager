const path = require('path');
const express = require('express');
const app = express();
const port = 3000;
const base='127.0.0.1';
const hbs = require('hbs');

app.set("view engine", "hbs");
let getPath = (file)=>path.join(__dirname,file);
 // function to get path of file
 
// app.use(express.static(path.join(__dirname,'<folderName>')));
 // to serve static files/folders using middlewares

app.use(express.urlencoded({extended: true}));
//to read body of post request

app.use('/', (req, res, next) => {
    res.render('index');
    //homepage when server starts
})


app.listen(port,()=>{
console.log(base+':'+port);
});



