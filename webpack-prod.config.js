const path = require('path');
const webpack = require('webpack');

const wepack_base_config = require('./webpack.config');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = Object.assign({}, wepack_base_config, {
  entry: {
    index: './index',
    vendor: [
      'babel-polyfill',
      'react',
      'react-dom',
      'react-redux',
      'react-router',
      'react-router-redux',
      'redux',
      'redux-thunk'
    ]
  },

  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'b-[hash:8].js',
    publicPath: '/'
  },

  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'v-[hash:8].js',
      chunks: ['vendor']
    }),
    new HtmlWebpackPlugin({
      template: './static/index.html'
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"'
    })
  ]
});