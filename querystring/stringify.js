const querystring = require('querystring')

// 将一个对象序列化成查询字符串
const object = {
  x: 'Hello',
  y: 'World',
  z: ['node', 'js']
}

const newQueryString = querystring.stringify(object)

console.log(newQueryString) // 输出 "x=Hello&y=World&z=node&z=js"