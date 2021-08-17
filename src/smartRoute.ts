import express from "express";
import fs from "fs";

export default function (app) {
  fs.readdirSync(__dirname).forEach((file) => {
    if (file === "index.js") return;
    const path =
      "/" + (file !== "root.js" ? snakeCase(file.replace(".js", "")) : ""); // root.js file will map to /
    const router = express.Router();
    const route = require(require("path").join(__dirname, file));
    router;
    app.use(path, route);
  });
}
