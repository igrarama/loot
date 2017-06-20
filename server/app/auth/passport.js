
const md5 = require('md5');
const mongoose = require('mongoose');
const LocalStrategy = require('passport-local').Strategy;

module.exports = (passport) => {

  passport.serializeUser((user, done) => {
    console.log('serializeUser', user);
    done(null, user._id);
  });

  passport.deserializeUser((id, done) => {
    mongoose.model('Person').findById(id)
      .then(user => {
        console.log('deserializeUser', user);
        done(null, user);
      })
      .catch(err => done(err));
  });

  passport.use(new LocalStrategy(
    { usernameField: 'email' },
    function(email, password, done) {
      mongoose.model('Person')
        .findOne({ email, password: md5(password) })
        .then(user => {
          console.log(user);
          if(user)
            done(null, user);
          else
            done(null, false); 
        })
        .catch(err => done(err));
    }
  ));
};