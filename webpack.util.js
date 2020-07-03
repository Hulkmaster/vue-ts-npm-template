const defaultScssRule = {
  test: /\.s[ac]ss$/i,
  use: [
    // Creates `style` nodes from JS strings
    'style-loader',
    // Translates CSS into CommonJS
    'css-loader',
    {
      loader: 'postcss-loader',
      options: {
        ident: 'postcss',
        plugins: [
          require('postcss-preset-env')(),
        ]
      }
    },
    // Compiles Sass to CSS
    'sass-loader',
  ],
};

module.exports = {
  defaultScssRule,
}
