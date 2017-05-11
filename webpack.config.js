const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    filename: 'bundle',
    path: path.resolve(__dirname, 'build')
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['react', 'es2015', 'stage-0']
      }
    }]
  },
  devServer: {
    port: 4500
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
      filename: './index.html'
    })
  ]
}
