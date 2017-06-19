const path = require('path');
const webpack = require('webpack');

const WebpackNotifierPlugin = require('webpack-notifier');
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
    filename: 'bundle-[hash:6].js',
    publicPath: '/'
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new WebpackNotifierPlugin(),
    new HtmlWebpackPlugin({
      template: './static/index.html'
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    })
  ],

  resolve: {
    extensions: ['.js', '.jsx']
  },

  module: {
    loaders: [
      { test: /\.(js|jsx)$/, use: ['react-hot-loader', 'babel-loader'], include: path.join(__dirname, 'client') },
      { test: /\.(css|scss)$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
      { test: /\.(woff2?|ttf|svg|eot)(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader' },
    ]
  }
};