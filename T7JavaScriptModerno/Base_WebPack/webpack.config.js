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
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist'),
    },
    port: 3000,
    // open: true,
    open: {
      app: { name: 'google-chrome' },
    },
    hot: true,
    compress: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(?:js|mjs|cjs)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
};
