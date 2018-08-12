const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/client/index.js",
  output: {
    path: __dirname + "/dist",
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        use: "babel-loader",
        test: /\.js$/,
        exclude: /node_modules/
      },
      {
        use: ["style-loader", "css-loader"],
        test: /\.css$/
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/client/index.html"
    })
  ]
};
