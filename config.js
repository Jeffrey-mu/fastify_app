module.exports.mysql = {
  host: process.env.MYSQL_HOST || 'bj-cynosdbmysql-grp-0o0dqcfy.sql.tencentcdb.com',
  port: process.env.MYSQL_PORT || '21729',
  database: process.env.MYSQL_DATABASE || 'admin',
  user: process.env.MYSQL_USER || 'admin',
  password: process.env.MYSQL_PASSWORD || 'mc1009jf1018.'
}
