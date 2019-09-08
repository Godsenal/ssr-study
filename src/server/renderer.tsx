import React from "react";
import { RequestHandler } from "express";
import { renderToNodeStream } from "react-dom/server";

import Html from "./Html";

function normalizeAssets(assets: any) {
  if (!!assets && typeof assets === "object" && !Array.isArray(assets))
    return Object.values(assets);

  return Array.isArray(assets) ? assets : [assets];
}

const renderer = (): RequestHandler => (req, res, next) => {
  const { assetsByChunkName } = require("../../dist/stats.webpack.json");
  const { js, css } = normalizeAssets(assetsByChunkName.main).reduce(
    (acc, path) => {
      path.endsWith(".css") ? acc.css.push(path) : acc.js.push(path);
      return acc;
    },
    { js: [], css: [] }
  );

  renderToNodeStream(<Html js={js} css={css} />).pipe(res);
  return next;
};

export default renderer;
