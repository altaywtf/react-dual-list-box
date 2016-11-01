const config = require('../');

module.exports = [
  {
    test: /\.jsx?$/,
    loader: 'babel',
    include: [
      config.lib.input,
      config.docs.input,
    ],
  },
  {
    test: /\.scss/,
    loaders: [
      'style',
      'css-loader?modules=true&localIdentName=[folder]__[local]!postcss!sass?sourceMap',
    ],
  },
  {
    test: /\.css/,
    loaders: [
      'style',
      'css',
    ],
  },
];
