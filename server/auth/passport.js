
const LocalStrategy = require('passport-local').Strategy;

module.exports = (passport) => {
  passport.serializeUser((user, done) => done(null, user.id));

  passport.deserializeUser((id, done) => {
    done(null, { id });
  });

  passport.use(new LocalStrategy(
    function(username, password, done) {
      if(username == 't' && password == 't')
        return done(null, { id: 1 });
      return done(null, false);
    }
  ));
};