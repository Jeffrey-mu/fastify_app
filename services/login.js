const { DB } = require('../utils')
class LoginService {
  constructor(app) {
    if (!app.ready) { throw new Error('app is not ready'); }
    this.app = app;
    const { mysql } = this.app
    if (!mysql) { throw new Error('cant get .mysql from fastify app.') }
    this.DB = new DB(mysql, 'users');
  }
  async getOn({ username, password }) {
    let data = await this.DB.query('username', 'username=? AND password=?', [username, password])
    return data
  }
}

module.exports = {
  LoginService
}