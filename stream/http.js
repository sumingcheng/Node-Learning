const http = require('http')

const server = http.createServer((req, res) => {
  let body = ''
  
  // 监听请求体的 data 事件，每次读取一部分数据并将数据拼接到 body 中
  req.on('data', (chunk) => {
    body += chunk.toString()
  })
  
  // 监听请求体的 end 事件，表示数据读取完成
  req.on('end', () => {
    console.log(`Received request body: ${body}`)
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    res.end('Hello, World!\n')
  })
})

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/')
})


// 测试
// curl -X POST -H "Content-Type: text/plain" -d "Hello, Node.js!" http://localhost:3000/
