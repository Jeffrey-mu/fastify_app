'use strict'

module.exports = async function (fastify, opts) {
  const mysql = fastify.mysql
  fastify.get('/', async function (request, reply) {
    return { root: true }
  })
  fastify.post('/login', async function (request, reply) {
    mysql.query(
      // 'SELECT id FROM users WHERE id=?', [request.body.email],
      'SELECT id FROM users WHERE id=?', [1],
      (err, result) => {
        console.log(result);
        !err && send()
      }
    )
    function send() {
      reply.send({ hello: 'world' })
    }
  })
  fastify.get('/signup', async function (request, reply) {
    return { root: true }
  })
}
