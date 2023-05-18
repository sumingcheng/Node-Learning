const querystring = require('querystring')

const queryString = 'a=foo&b=bar&c=baz'

const queryParsed = querystring.parse(queryString)

console.log(queryParsed) // 输出 { a: 'foo', b: 'bar', c: 'baz' }
