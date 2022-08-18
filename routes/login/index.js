"use strict";
const { getLoginUser } = require("../../services/userService");
module.exports = async function (app, opts) {
  app.post("/", async function (request, reply) {
    let { body } = request;
    let data = await getLoginUser(body);
    return data;
  });
  app.get("/", async function (request, reply) {
    let { query } = request;
    let data = await getLoginUser(query);
    return data;
  });
};
