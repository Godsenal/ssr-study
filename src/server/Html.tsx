import React from "react";

import App from "../shared/App";

type Props = {
  css: string[];
  js: string[];
};

const Html = ({ css, js }: Props) => (
  <html>
    <head>
      <title>My App</title>
      <style>
        {css.map(file => (
          <link key={file} href={file} rel="stylesheet" />
        ))}
      </style>
    </head>
    <body>
      <div id="root">
        <App />
      </div>
      {js.map(file => (
        <script key={file} src={file} />
      ))}
    </body>
  </html>
);

export default Html;
