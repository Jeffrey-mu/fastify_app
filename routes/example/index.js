'use strict'

module.exports = async function (fastify, opts) {
  const mysql = fastify.mysql
  fastify.get('/', async function (request, reply) {
    return 'this is an example'
  })
  fastify.get('/user/:id', function (req, reply) {
    mysql.query(
      'SELECT id FROM users WHERE id=?', [req.params.id],
      function onResult(err, result) {
        reply.send(err || result)
      }
    )
  })
}
