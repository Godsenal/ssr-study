const merge = require("webpack-merge");
const webpack = require("webpack");
const webpackNodeExternals = require("webpack-node-externals");

const base = require("./webpack.base");
const ENV = require("./env");

module.exports = merge(base, {
  name: "server",
  target: "node",
  entry: ["webpack/hot/poll?1000", ENV.GET_DIR("src", "server", "index.ts")],
  output: {
    path: ENV.GET_DIR("dist"),
    libraryTarget: "commonjs2",
    filename: "server.js"
  },
  externals: [
    webpackNodeExternals({
      whitelist: ["webpack/hot/poll?1000"]
    })
  ],
  plugins: [new webpack.HotModuleReplacementPlugin()]
});
