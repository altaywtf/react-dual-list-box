const webpack = require('webpack');
const extractCSS = require('./_extractCSS');

module.exports = [
  extractCSS,

  new webpack.optimize.UglifyJsPlugin({
    minimize: true,
    comments: false,
    compress: {
      warnings: false,
    },
  }),

  new webpack.optimize.OccurenceOrderPlugin(),
  new webpack.optimize.DedupePlugin(),
];
