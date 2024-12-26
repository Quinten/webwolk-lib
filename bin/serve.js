#! /usr/bin/env node
console.log("Serving your webwolk-site for development");

import Eleventy from "@11ty/eleventy";

let elev = new Eleventy(
    "./data/pages",
    "./public",
    {
        config: function(eleventyConfig) {
            eleventyConfig.setIncludesDirectory("../../node_modules/@quinten/webwolk-lib/_includes");
        }
    }
);
await elev.init();
await elev.watch();
await elev.serve();
