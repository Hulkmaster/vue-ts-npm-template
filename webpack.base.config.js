const VueLoaderPlugin = require('vue-loader/lib/plugin');
const path = require('path');

const isProd = process.env.NODE_ENV === 'production'; 

module.exports = {
  mode: isProd ? 'production' : 'development',
  devtool: isProd ? 'cheap-module-source-map' : 'inline-source-map',
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          appendTsSuffixTo: [/\.vue$/],
        }
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
  ]
};
