#! /usr/bin/env node
console.log("Building your webwolk-site");

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
await elev.write();
