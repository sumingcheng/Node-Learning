/*
* HTTP 模块的使用
* */
const http = require('http')
// 创建一个 HTTP 服务
const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain')
  
  res.end('hello world')
})
// listen 指示服务器是否正在监听连接
server.listen(3000, () => {
  console.log('server is running at http://localhost:3000')
})





