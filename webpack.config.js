var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var FaviconsWebpackPlugin = require('favicons-webpack-plugin');

module.exports = env => {
  return {
    entry: {
      app: './app/index.js',
      vendor: [
        'jquery',
        'angular',
        'kendo/js/kendo.all.js',
        'ng-redux',
        'redux-logger',
        'angular-ui-router',
        'hally9k-redux-ui-router'
      ]
    },
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: 'bundle.[hash].[name].js',
      pathinfo: !env.prod
    },
    plugins: [

     new webpack.LoaderOptionsPlugin({
       options: {
         eslint: {
           failOnWarning: false,
           failOnError: true
         }
       }
     }),

      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: 'app/index.html'
      }),

      new ExtractTextPlugin('[name].[hash].css'),

      env.test ?
      undefined :
      new webpack.optimize.CommonsChunkPlugin(
        {
          name: 'vendor'
        }
      ),

      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery"
      }),

      new FaviconsWebpackPlugin({
        logo: './app/favicon.png',
        prefix: 'favicons/'
      }),

      env.prod ?
      new webpack.optimize.UglifyJsPlugin({
          mangle: false
      })
      : undefined

    ].filter(p => !!p), // filter out any undefined plugins and cast to boolean to patch the commons chuck plugin for test mode.

    module: {
      loaders: [
        {
          test: /\.js$/,
          loaders: ['eslint'],
          exclude: [/node_modules/],
          enforce: 'pre'
        },
        {
          test: /\.js$/,
          loaders: ['ng-annotate?add=true', 'babel?comments=true'],
          exclude: [/node_modules/]
        },
        {
          test: /\.css$/,
          loader: ExtractTextPlugin.extract({
            fallbackLoader: "style-loader",
            loader: "css-loader!postcss-loader"
          })
        },
        {
          test: /\.(woff|woff2|ttf|eot)$/,
          loader: 'file-loader?name=assets/fonts/[name].[hash].[ext]'
        },
        {
          test: /\.(png|jpg|jpeg|gif|svg)$/,
          loader: 'file-loader?name=assets/images/[name].[hash].[ext]'
        },
        {
          test: /\.html$/,
          loader: 'html-loader'
        },
        {
          test: /\.json$/,
          loader: "json-loader"
        }
      ]
    }
  }
}
