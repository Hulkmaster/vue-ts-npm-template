const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.config.js');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { defaultScssRule } = require('./webpack.util.js');

module.exports = merge(baseConfig, {
  entry: './src/main.ts',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.(ttf)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              context: __dirname,
            },
          },
        ],
        exclude: /node_modules/,
      },
      defaultScssRule,
    ],
  },
  plugins: [
    new HtmlWebpackPlugin(),
  ]
});
