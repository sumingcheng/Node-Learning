const util = require('util')

const obj = {
  a: 1,
  b: 'string',
  c: {
    d: [1, 2, 3]
  }
}
// 以便于调试的方式输出一个对象
console.log(util.inspect(obj, { colors: true, depth: null }))