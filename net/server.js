const net = require('net')

// 创建socket服务器
const server = net.createServer()

// 定义客户端数组，用于存储已连接的客户端socket对象
const clients = []

// 监听connection事件，当有客户端连接时，保存socket对象并打印连接信息
server.on('connection', (clientSocket) => {
  clients.push(clientSocket)
  
  console.log(`客户端 ${clientSocket.remoteAddress}:${clientSocket.remotePort} 已连接`)
  
  // 设置通信编码为UTF-8
  clientSocket.setEncoding('utf8')
  
  // 监听socket的data事件，接收客户端发送的数据，并将数据转发给所有连接的客户端
  clientSocket.on('data', (data) => {
    console.log(`收到来自 ${clientSocket.remoteAddress}:${clientSocket.remotePort} 的消息：${data.toString().trim()}`)
    
    clients.forEach((socket) => {
      if (!socket.destroyed) {
        socket.write(`${clientSocket.remoteAddress}:${clientSocket.remotePort} 发送的消息：${data}`)
      }
    })
  })
  
  // 监听socket的close事件，客户端关闭连接时，从客户端数组中移除该socket，并打印断开连接信息
  clientSocket.on('close', () => {
    console.log(`客户端 ${clientSocket.remoteAddress}:${clientSocket.remotePort} 已断开连接`)
    const index = clients.indexOf(clientSocket)
    if (index !== - 1) {
      clients.splice(index, 1)
    }
  })
})

// 启动socket服务器监听端口3000，等待客户端连接
server.listen(3000, () => {
  console.log('Server running on 127.0.0.1:3000')
  
  // 监听stdin的data事件，用户在控制台输入数据时，将数据转发给所有连接的客户端
  process.stdin.on('data', (data) => {
    console.log(`服务端发送的消息：${data.toString().trim()}`)
    
    clients.forEach((socket) => {
      if (!socket.destroyed) {
        socket.write(`服务端发送的消息：${data}`)
      }
    })
  })
})
