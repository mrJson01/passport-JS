const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');

function initialize(passport,getUserByEmail,getUserById){
    
    const authenticateUser = async (email,password,done)=>{
        const user = getUserByEmail(email);
        
        if(user ==null)
        {
            console.log('1');
            return done(null,false,{message:'No user with that email'});
        }
        
        try{
            if(password === user.password){
                console.log('2');
                done(null,user);
            }else{
                console.log('3');
                return done(null,false,{message:'Password incorrect'});
            }
            
        }catch(e){
            console.log(e);
            done(e);
        }
    };
    
    passport.use(new LocalStrategy({
        usernameField:'email',
        passwordField:'password'}
        ,authenticateUser));
    
    passport.serializeUser((user,done)=>{ done(null,user.id); });
    passport.deserializeUser((id,done)=>{ 
        done(null,getUserById(id));
    });
}

module.exports = initialize;