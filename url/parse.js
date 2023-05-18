const url = require('url')
const util = require('util')


const urlString = 'https://www.example.com/path/page.html?id=123&name=John'

const urlObject = url.parse(urlString, true)

console.log(urlObject.protocol) // 输出 "https:"
console.log(urlObject.host) // 输出 "www.example.com"
console.log(urlObject.pathname) // 输出 "/path/page.html"
console.log(util.inspect(urlObject.query, { colors: true, depth: null })) // 输出 { id: '123', name: 'John' }
