const path = require('path');
const webpack = require('webpack');

const WebpackNotifierPlugin = require('webpack-notifier');

module.exports = {
  devtool: 'inline-source-map',
  context: path.join(__dirname, 'client'),

  entry: [
    'babel-polyfill',
    'webpack-hot-middleware/client',
    './index'
  ],

  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new WebpackNotifierPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    })
  ],

  resolve: {
    extensions: ['.js', '.jsx']
  },

  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        loaders: ['react-hot-loader', 'babel-loader'],
        include: path.join(__dirname, 'client')
      },
      {
        test: /\.(css|scss)$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
    ]
  }
};