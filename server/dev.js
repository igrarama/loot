const path = require('path');
const config = require('../webpack.config');
const webpack = require('webpack');

const app = module.parent.exports;
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  publicPath: config.output.publicPath,
  stats: { colors: true }
}));
app.use(require('webpack-hot-middleware')(compiler));

app.get('*', function(req, res) {
  res.sendFile(path.join(path.dirname(__dirname), 'client', 'static', 'index.html'));
});
