'use strict'

const path = require('path')
const AutoLoad = require('@fastify/autoload')

module.exports = async function (fastify, opts) {
  await fastify.register(require('@fastify/express'))
  // Single path
  const serveStatic = require('serve-static')
// mysql = {host, port, database, user, password}
  await fastify.register(require('@fastify/mysql'), 
  Object.assign({}, require('./config').mysql, opts.mysql))
  
  fastify.use('/', serveStatic(path.resolve(__dirname, 'public')))
  // Place here your custom code!

  // Do not touch the following lines

  // This loads all plugins defined in plugins
  // those should be support plugins that are reused
  // through your application
  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'plugins'),
    options: Object.assign({}, opts)
  })

  

  // This loads all plugins defined in routes
  // define your routes in one of these
  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'routes'),
    options: Object.assign({}, opts)
  })
}
