"use strict";
const fileTree = require("../../utils/fs");
const fs = require("fs");
module.exports = async function (app, opts) {
  app.get("/", async function (request, reply) {
    reply.header("Content-Type", "text/html");
    return fs.readFileSync(
      "/Users/wjf/Desktop/learn/fastify_app/template/fileTree.html"
    );
  });
  app.get("/tree", async function (request, reply) {
    var { fileDir, deep } = request.query;
    return fileTree(fileDir, { deep });
  });
};
