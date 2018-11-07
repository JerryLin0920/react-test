const HtmlWebPackPlugin = require("html-webpack-plugin");

const proxy = process.env.npm_config_proxy || "http://localhost:8080/";

const htmlPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "./index.html"
});

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  plugins: [htmlPlugin],
  devServer: {
    port: 3000,
    proxy: {
      '**': {
        target: proxy,
        secure: false,
        prependPath: false
      }
    },
    publicPath: 'http://localhost:3000/',
    historyApiFallback: true
  }
};