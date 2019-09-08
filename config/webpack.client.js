const merge = require("webpack-merge");
const { StatsWriterPlugin } = require("webpack-stats-plugin");
const base = require("./webpack.base");
const ENV = require("./env");

module.exports = merge(base, {
  name: "client",
  target: "web",
  entry: ENV.GET_DIR("src", "client", "index.tsx"),
  output: {
    path: ENV.GET_DIR("dist"),
    filename: "[name].js"
  },
  plugins: [
    new StatsWriterPlugin({
      filename: `stats.webpack.json`
    })
  ]
});
