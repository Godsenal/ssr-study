const webpack = require("webpack");
const { execFile } = require("child_process");
const express = require("express");
const webpackDevMiddleware = require("webpack-dev-middleware");

const ENV = require("../config/env");
const configs = require("../config/webpack.dev");

const app = express();
const compiler = webpack(configs);
const devMiddleware = webpackDevMiddleware(compiler, {
  writeToDisk: true
});

app.use(devMiddleware);

devMiddleware.waitUntilValid(() => {
  const server = execFile("node", [ENV.GET_DIR("dist", "server.js")]);

  server.stdout.setEncoding("utf8");
  server.stdout.on("data", data => {
    console.log(data.toString());
  });
  server.stderr.on("data", err => {
    console.error(err.toString());
  });
});
