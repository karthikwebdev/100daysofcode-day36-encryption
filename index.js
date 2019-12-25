require('./db')
const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const bodyparser = require('body-parser');
const bcrypt = require('bcryptjs')
const signup = require('./signupcontroller');
var app = express();
app.set('views',path.join(__dirname,'/views/'));
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());
app.engine('hbs',exphbs({extname:'hbs',defaultLayout:'layoutmain',layoutsDir:__dirname + '/views/layouts/' }));
app.set('view engine','hbs');
app.listen(5000,() => {
    console.log('express started in port:5000');
});
app.use(express.static(path.join(__dirname, '/public')));
app.use('/',signup)
