const passport = require('passport');
const initialize = require('./passport-config.js');

initialize(passport);

module.exports = passport;