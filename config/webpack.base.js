const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

const ENV = require("./env");

const config = {
  mode: ENV.MODE,
  module: {
    rules: [
      {
        test: /\.(jsx?|tsx?)$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  },
  resolve: {
    modules: ["node_modules"],
    extensions: [".tsx", ".jsx", ".ts", ".js", ".json"]
  },
  output: {
    path: ENV.GET_DIR("dist"),
    filename: "[name].js"
  }
};

module.exports = config;
