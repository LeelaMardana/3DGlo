const path = require('path');

module.exports = {
  stats: 'none',
  context: path.resolve(__dirname, 'src'),
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: './js/main.js',
  },
  devServer: {
    hot: true,
    client: { logging: 'none' },
    static: {
      directory: './dist',
      watch: true,
    },
  },
};
