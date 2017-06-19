const http = require('http');
const helmet = require('helmet');
const morgan = require('morgan');
const express = require('express');
const passport = require('passport');
const bodyParser = require('body-parser');
const compression = require('compression');
const sessions = require('express-session');
const errorhandler = require('errorhandler');
const cookieParser = require('cookie-parser');

const app = module.exports = express();

app.set('ip', process.env.NODE_IP || '');
app.set('port', process.env.NODE_PORT || 3000);

app.use(helmet());
app.use(morgan('dev'));
app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json({
 type: 'application/*+json'
}));
app.use(sessions({
  secret: 'a304dbeed97c33c3a48016e474938c95', 
  name: 'loot-session',
  resave: true,
  saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

require('./auth/passport')(passport);

app.get('/user', (req, res) => res.send(req.user));
app.get('/user/login', 
  passport.authenticate('local'),
  (req, res) => res.redirect('/user'));

if(process.env.NODE_ENV === 'production'){
  app.use(express.static('dist'));
} else {
  require('./dev');
  app.use(require('errorhandler')());
}

http.createServer(app).listen(app.get('port'), app.get('ip'), () =>{
  console.log(process.pid, 'Listening in port', app.get('port'));
});