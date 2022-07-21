import * as fs from "fs";
import prettier from "prettier";
import React from "react";
import ReactDOMServer from "react-dom/server";
import App from "./App";


const render = () => {
      let html = ReactDOMServer.renderToStaticMarkup(<App />)
      let htmlWDoc = "<!DOCTYPE html>" + html;
      let prettyHtml = prettier.format(htmlWDoc, { parser: "html" });
      let outputFile = `./output.html`;
      fs.writeFileSync(outputFile, prettyHtml);
      console.log(`Wrote ${outputFile}`);
}

render();