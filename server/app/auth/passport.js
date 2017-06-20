
const md5 = require('md5');
const mongoose = require('mongoose');
const LocalStrategy = require('passport-local').Strategy;

module.exports = (passport) => {

  passport.serializeUser((user, done) => done(null, user.id));

  passport.deserializeUser((id, done) => {
    mongoose.model('Person').findOne({ id })
      .then(user => done(null, user))
      .catch(err => done(err));
  });

  passport.use(new LocalStrategy(
    { usernameField: 'email' },
    function(email, password, done) {
      console.log({ email, password: md5(password) });
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