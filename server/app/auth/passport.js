
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
    function(username, password, done) {

      //TODO: Addd check for user password, currently this

      if(username == 't' && password == 't'){
        mongoose.model('Person').findById('59480f2ca7450598758b1eae')
          .then(user => done(null, user));
      } else {
        done(null, false);
      }
    }
  ));
};