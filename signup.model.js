const mongoose = require('mongoose')
var signupschema  = new mongoose.Schema({
    username:{
        type: String
    },
    email:{
        type: String
    },
    password:{
        type: String
    }
})
mongoose.model('signup',signupschema);
