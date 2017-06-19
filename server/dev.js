const path = require('path');
const config = require('../webpack.config');
const webpack = require('webpack');

const app = module.parent.exports;
const compiler = webpack(config);

const dev_middleware = require('webpack-dev-middleware')(compiler, {
  publicPath: config.output.publicPath,
  stats: { colors: true }
});

app.use(dev_middleware);
app.use(require('webpack-hot-middleware')(compiler));

app.get('*', function(req, res) {
  res.end(dev_middleware.fileSystem.readFileSync(path.join(config.output.path, 'index.html')));
});