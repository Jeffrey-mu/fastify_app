class DB {
  constructor(mysql, tableName) {
    if (!mysql) throw new Error("No database connection available");
    this.mysql = mysql;
    this.tableName = tableName;
  }
  query(result, filter, values) {

    if (!result) throw new Error("No result provided");
    if (!filter) throw new Error("No filter provided");
    if (!values) throw new Error("No values provided");
    return new Promise( (resolve, reject) => {
      this.mysql.query(
        `SELECT ${result} FROM ${this.tableName} WHERE ${filter}`, [...values],
        (err, result) => {
          return err ? reject(err) : resolve(result)
        })
    })
  }
  insert(result, values) {
    return new Promise( (resolve, reject) => {
      this.mysql.query(
        `INSERT INTO ${this.tableName} (${result}) values (${values})`,
        (err, result) => {
          return err ? reject(err) : resolve(result)
        }
      )
    })
  }
  delete(result) {
    return new Promise( (resolve, reject) => {
      this.mysql.query(
        `DELETE FROM ${this.tableName} WHERE ${result}`,
        (err, result) => {
          return err ? reject(err) : resolve(result)
        }
      )
    })
  }
  update(result, values) {
    return new Promise( (resolve, reject) => {
      this.mysql.query(
        `UPDATE ${this.tableName} SET ${result})`),
        (err, result) => {
          return err ? reject(resultData()) : resolve(result)
        }
    })
  }
}
module.exports = {
  DB
}