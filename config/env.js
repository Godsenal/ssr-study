const path = require("path");
const root = process.cwd();

const GET_DIR = (...paths) => {
  return path.resolve(root, ...paths);
};
const MODE =
  process.env && process.env.NODE_ENV == "production"
    ? "production"
    : "development";

module.exports = {
  GET_DIR,
  MODE
};
