require('dotenv').config({path:'.env'});

const express = require('express');
const body = require('body-parser');
const cookie = require('cookie-parser');
const path = require('path');
const flash = require('express-flash');
const session = require('express-session');

const passport = require('./PassPortJS.js');

const Router = require('./router.js');

const app = express();

app.set('views',path.join(__dirname,'views'));
app.set('view engine','pug');
app.use(express.static(path.join(__dirname,"public")));

app.use(body.urlencoded({extended:true}));
app.use(body.json());
app.use(cookie());

app.use(flash());

app.use(session({
    secret:process.env.SESSION_SECRET,
    resave:false,
    saveUninitialized:false
}));

app.use(passport.initialize());
app.use(passport.session());



app.use('/',Router);

module.exports = app;