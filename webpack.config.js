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
  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
};

// "css-loader","node-sass","sass-loader","style-loader" - для импортирования css/scss из node modules в js файлы чтобы не подключать стили через индекс или локально

// "webpack-dev-server" и "webpack-cli" выполняет роль live server и запускает проект - npm start

// "swiper" - слайдер
