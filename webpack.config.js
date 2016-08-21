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
        'redux-ui-router'
      ]
    },
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: env.prod? 'bundle.[hash].[name].js' : 'bundle.[name].js',
      pathinfo: !env.prod
    },
    plugins: [

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
        prefix: 'icons-[hash]/'
      }),

      env.prod ?
      new webpack.optimize.UglifyJsPlugin({
          mangle: false
      })
      : undefined

    ].filter(p => !!p), // filter out any undefined plugins and cast to boolean to patch the commons chuck plugin for test mode.
    module: {
      preLoaders: [
        {
          test: /\.js$/,
          loader: 'eslint',
          exclude: [/node_modules/]
        }
      ],
      loaders: [
        {
          test: /\.js$/,
          loaders: ['ng-annotate?add=true', 'babel?comments=true'],
          exclude: [/node_modules/]
        },
        {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract('style', 'css?sourceMap!postcss')
        },
        {
          test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
          loader: 'file-loader'
        },
        {
          test: /\.html$/,
          loader: 'html-loader'
        },
        {
          test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          loader: "url-loader?limit=10000&minetype=application/font-woff"
        },
        {
          test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          loader: "file-loader"
        },
        {
          test: /\.json$/,
          loader: "json-loader"
        }
      ]
    },
    eslint: {
        failOnWarning: false,
        failOnError: true
    }
  }
}
