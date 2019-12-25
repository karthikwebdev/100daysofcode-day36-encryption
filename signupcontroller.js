const express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs')
const Signup = mongoose.model('signup');
router.get('/',(req,res)=>{
    res.render("./signup.hbs")
})
router.post('/signup',(req,res)=>{
    insertsignup(req,res)
})
function insertsignup(req,res){
    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(req.body.password, salt, function(err, hash) {
            var signup = new Signup();
    signup.username = req.body.username;
    signup.password = hash;
    signup.email=req.body.email;
    signup.save((err,docs)=>{
        if(!err){
            res.redirect('/');
            console.log("signup completed");
        }
        else{
            console.log('error during insertion  '  + err);
        }
    })
        });
    });
}
module.exports= router;
