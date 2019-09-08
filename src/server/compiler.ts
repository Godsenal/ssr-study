import webpack from "webpack";
import middleware from "webpack-dev-middleware";

type EnvType = "development" | "production";

const compiler = (env: EnvType) => {
  // if (env === 'development')
  const webpackCompiler = webpack(require("../../config/webpack.client"));
  const webpackDevMiddleware = middleware(webpackCompiler, {
    publicPath: "/",
    serverSideRender: true,
    writeToDisk: true
  });

  return webpackDevMiddleware;
};

export default compiler;
