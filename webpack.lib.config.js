const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.config.js');
const path = require('path');
const {
  defaultScssRule,
} = require('./webpack.util.js');

module.exports = merge(baseConfig, {
  entry: './src/component/export.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    libraryTarget: 'commonjs'
  },
  module: {
    rules: [
      defaultScssRule,
    ],
  },
  externals: [
    'vue',
  ],
});
