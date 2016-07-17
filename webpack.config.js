var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = env => {
  return {
    entry: './app/index.js',
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: 'bundle.js'
    },
    plugins: [
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: 'app/index.html'
      })
    ],
    devtool: 'source-map',
    module: {
      loaders: [
        {
          test: /\.js$/,
          loaders: ['babel'],
          exclude: [/node_modules/]
        },
        {
          test: /\.html$/,
          loader: 'html'
        },
        {
          test: /\.css$/,
          loader: "style!css"
        }
      ]
    }
  }
}
