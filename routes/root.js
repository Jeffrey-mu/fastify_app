'use strict'

module.exports = async function (app, opts) {
  app.get('/', async function (request, reply) {
    return ''
  })
  app.post('/calculation', async function (request, reply) {

    function generate(string) {
      // const fs = require('fs');
      // let data = fs.readFileSync(path, 'utf8');
      let dataArray = string.trim().replaceAll('.com', '').split('\n').filter(Boolean)
      dataArray.map((val, index) => {
        console.log(index + ': ' + val);
      })
      let includeChineseCharacters = []
      let returnValue = []
      format()
      function format(index = 0) {
        var reg = /.*[\u4e00-\u9fa5].*/;
        let hz = dataArray.slice(index).findIndex((item) => {
          return reg.test(item)
        })
        if (hz !== -1) {
          includeChineseCharacters.push(hz + index)
          format(hz + 1 + index)
        }
      }
      let len = includeChineseCharacters.length
      includeChineseCharacters.reduce((pre, next) => {
        if (next || len == 1)
          returnValue.push({
            name: dataArray[pre],
            data: dataArray.slice(pre + 1, len === 1 ? Infinity : next)
          })
        return pre = next
      }, 0)
      returnValue.push({
        name: dataArray[includeChineseCharacters[len-1]],
        data: dataArray.slice(includeChineseCharacters[len-1], Infinity)
      })
      return returnValue
    }
    return generate(request.body.data)
  })
}
