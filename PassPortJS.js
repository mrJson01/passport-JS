const passport = require('passport');

const users =[{
    id: Date.now().toString(),
    email:'piotr-rekos@wp.pl',
    password:'qwerty'
}];

const initializePassport = require('./passport-config.js');
initializePassport(passport,
    email=> users.find(user => user.email===email)
);

module.exports = passport;