const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = {

  entry: './src/index.js',

  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },

  mode: "development",

  module: {

    rules: [

      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },

      {

        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',

      },

    ],
  },

  plugins: [

    new Dotenv()
    
  ],


};