const http = require('http');
const express = require('express');

const app = module.exports = express();

app.set('ip', process.env.NODE_IP || '');
app.set('port', process.env.NODE_PORT || 3000);

if(process.env.NODE_ENV === 'production'){
  app.use(express.static('dist'));
} else {
  require('./dev');
}

http.createServer(app).listen(app.get('port'), app.get('ip'), () =>{
  console.log(process.pid, 'Listening in port', app.get('port'));
});