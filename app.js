'use strict'

const path = require('path')
const AutoLoad = require('@fastify/autoload')
const serveStatic = require('serve-static')

module.exports = async function (fastify, opts) {
  await fastify.register(require('@fastify/express'))
  // Single path
  fastify.use('/', serveStatic(path.join(__dirname, '/static')))

  // Place here your custom code!

  // Do not touch the following lines

  // This loads all plugins defined in plugins
  // those should be support plugins that are reused
  // through your application
  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'plugins'),
    options: Object.assign({}, opts)
  })
  // mysql = {host, port, database, user, password}
  const { mysql } = require('./config')
  const mysqlOpts = Object.assign({}, mysql, opts.mysql)
  fastify.register(require('@fastify/mysql'), mysqlOpts)
  // This loads all plugins defined in routes
  // define your routes in one of these
  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'routes'),
    options: Object.assign({}, opts)
  })
}
