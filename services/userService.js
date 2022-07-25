const { Op } = require("sequelize");
const UserModel = require("../model/user");
const md5 = require("md5");
async function getLoginUser(req) {
  // 获取当前登录用户
  const currentUser = await UserModel.findByPk(req.id);
  return currentUser;
}
module.exports = {
  getLoginUser
}
