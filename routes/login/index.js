'use strict'
const { LoginService } = require('../../services/login')
module.exports = async function (app, opts) {

  const loginService = new LoginService(app)

  app.post('/', async function (request, reply) {
    let { body } = request
    let data = await loginService.getOn(body)
    return data
  })
}
