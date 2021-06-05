const express = require('express');
const bcrypt = require('bcrypt');
const passport = require('./PassPortJS.js');


const Router = express.Router();


function ensureAuthenticated(req,res,next){
    if(req.isAuthenticated()){ return next();}
    res.redirect('/login');
}


Router.get('/home',ensureAuthenticated,(req,res)=>{
    res.render('home',{user:req.user});
})

//           LOGIN
Router.get('/login',(req,res)=>{
    res.render('login');
});

//          LOGIN-POST

Router.get('/auth/google',passport.authenticate('google',{scope:['profile']}));


Router.get('/return',
    passport.authenticate('google',{failureRedirect:'/login'}),
    (req,res)=>{
    res.redirect('/home');
});

Router.get('/logout',(req,res)=>{
    req.logOut();
    res.redirect('/login');
});



module.exports = Router;