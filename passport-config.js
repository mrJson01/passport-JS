const GoogleStrategy = require('passport-google-oauth20').Strategy;

function initialize(passport){
    
    function authenticate(accessToken,refreshToken,profile,cb){
        return cb(null,profile);
    }
    
    passport.use(new GoogleStrategy({
        clientID: process.env['PASSPORT_GOOGLE_ID'],
        clientSecret:process.env['PASSPORT_GOOGLE_SECRET'],
        callbackURL:'/return'
    },authenticate));
    
    passport.serializeUser((user,done)=>{ done(null,user); });
    passport.deserializeUser((obj,done)=>{
        done(null,obj); 
    });
}

module.exports = initialize;