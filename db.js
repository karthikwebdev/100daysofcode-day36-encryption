const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/usersDB',{useNewUrlParser:true} ,  function(err){
    if(!err) console.log('mongodb connection successfull');
    else console.error("there is an error in connecting database " + err)
})
require('./signup.model');
// './' means same directory