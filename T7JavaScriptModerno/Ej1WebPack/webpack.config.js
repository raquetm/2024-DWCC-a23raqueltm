const path = require('node:path');
const CopyPlugin = require('copy-webpack-plugin');
module.exports = {
  devtool: 'eval-source-map',
  entry: './src/js/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'), // __dirname: ruta absoluta directorio actual
    filename: 'main.js',
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: 'src/html', to: './', force: true },
        { from: 'src/css', to: './', force: true },
      ],
    }),
  ],
};
