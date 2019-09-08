import express from "express";
import compiler from "./compiler";
import renderer from "./renderer";

import ENV from "../../config/env";

class Server {
  app = express();
  init() {
    this.app.use(express.static("dist"));
    // this.app.use(compiler(ENV.MODE));
    this.app.use(renderer());
  }
}

export default Server;
