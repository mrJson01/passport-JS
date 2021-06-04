const express = require('express');
const bcrypt = require('bcrypt');
const passport = require('./PassPortJS.js');


const Router = express.Router();

const users = [];


Router.get('/home',(req,res)=>{
    res.render('home');
})

//           LOGIN
Router.get('/',(req,res)=>{
    res.render('login');
});

//          LOGIN-POST

Router.post('/login',passport.authenticate('local',{
    successRedirect:'/home',
    failureRedirect:'/',
    failureFlash:true
}));

//          REGISTER
Router.get('/register',(req,res)=>{
    res.render('register');
});

//         REGISTER-POST
Router.post('/register/send',async (req,res)=>{
    
    try{
        
        const hashPass = await bcrypt.hash(req.body.password,10);
        users.push({
            id:Date.now().toString(),
            name:req.body.user,
            email:req.body.email,
            password:hashPass
        });
        console.log(users);
        res.redirect('/');
    }catch {
        res.redirect('/register');
    }
    
});

module.exports = Router;