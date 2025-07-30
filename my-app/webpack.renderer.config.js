const path = require('path');
const rules = require('./webpack.rules');

// 1. Existing rule for CSS
rules.push({
  test: /\.css$/i,
  use: [
    'style-loader',      // injects CSS into the DOM :contentReference[oaicite:4]{index=4}
    'css-loader'         // resolves @import and url() in CSS :contentReference[oaicite:5]{index=5}
  ],
});

// 2. Add JSX/React support
rules.push({
  test: /\.jsx?$/i,
  exclude: /node_modules/,
  use: {
    loader: 'babel-loader',                  // runs JS/JSX through Babel :contentReference[oaicite:6]{index=6}
    options: { presets: ['@babel/preset-react'] }  // enables JSX syntax :contentReference[oaicite:7]{index=7}
  },
});

module.exports = {
  module: { rules },
  resolve: {
    extensions: ['.js', '.jsx'],  // allow omitting these extensions in imports :contentReference[oaicite:8]{index=8}
  },
};