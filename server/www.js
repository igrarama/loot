const http = require('http');
const helmet = require('helmet');
const morgan = require('morgan');
const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const bodyParser = require('body-parser');
const compression = require('compression');
const sessions = require('express-session');
const errorhandler = require('errorhandler');
const cookieParser = require('cookie-parser');
const gconf = require('gconf').instance.default;

const app = module.exports = express();

app.set('ip', process.env.NODE_IP || '');
app.set('port', process.env.NODE_PORT || 3000);

/* API and ect.. */
app.use(helmet());
app.use(morgan('dev'));
app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json(gconf.get('server.bodyParser')));
app.use(sessions(gconf.get('server.sessions')));

/* DB */
require('./app/data/models').initSchemas();

/* Passport */
app.use(passport.initialize());
app.use(passport.session());
require('./app/auth/passport')(passport);

/* Serve Static Files */
if(process.env.NODE_ENV === 'production'){
  app.use(express.static('dist'));
} else {
  require('./dev');
  app.use(require('errorhandler')());
}

/* Server Start */
mongoose.connect(gconf.get('db.url'), () => {
  console.log('Mongo Connected');
  http.createServer(app).listen(app.get('port'), app.get('ip'), () =>{
    console.log(process.pid, 'Listening in port', app.get('port'));
  });
});
