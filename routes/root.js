'use strict'

module.exports = async function (app, opts) {
  const mysql = app.mysql
  app.get('/', async function (request, reply) {
    return { root: true }
  })
}
