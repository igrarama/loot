const path = require('path');
const webpack = require('webpack');
const wepback_config = require('../webpack.config');

const app = module.parent.exports;
const compiler = webpack(wepback_config);

const dev_middleware = require('webpack-dev-middleware')(compiler, {
  publicPath: wepback_config.output.publicPath,
  stats: { colors: true }
});

app.use(dev_middleware);
app.use(require('webpack-hot-middleware')(compiler));

app.get('*', (req, res) => {
  res.send(dev_middleware.fileSystem.readFileSync(path.join(wepback_config.output.path, 'index.html')));
});