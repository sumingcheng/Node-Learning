const net = require('net')

const server = net.createServer()

const clients = []

server.on('connection', (clientSocket) => {
  // 存储当前连接的客户端通信接口
  clients.push(clientSocket)
  
  console.log(`客户端 ${clientSocket.remoteAddress}:${clientSocket.remotePort} 已连接`)
  
  clientSocket.setEncoding('utf8')
  
  // 监听从通信接口接收到的消息
  clientSocket.on('data', (data) => {
    console.log(`收到来自 ${clientSocket.remoteAddress}:${clientSocket.remotePort} 的消息：${data.toString().trim()}`)
    
    // 将消息广播到所有客户端（包括服务端自己）
    clients.forEach((socket) => {
      if (!socket.destroyed) {
        socket.write(`${clientSocket.remoteAddress}:${clientSocket.remotePort} 发送的消息：${data}`)
      }
    })
  })
  
  // 监听客户端断开连接
  clientSocket.on('close', () => {
    console.log(`客户端 ${clientSocket.remoteAddress}:${clientSocket.remotePort} 已断开连接`)
    
    // 将断开连接的客户端通信接口从数组中移除
    const index = clients.indexOf(clientSocket)
    if (index !== - 1) {
      clients.splice(index, 1)
    }
  })
})

server.listen(3000, () => {
  console.log('Server running on 127.0.0.1:3000')
  
  // 监听从控制台输入的消息
  process.stdin.on('data', (data) => {
    console.log(`服务端发送的消息：${data.toString().trim()}`)
    
    // 将消息广播到所有客户端（包括服务端自己）
    clients.forEach((socket) => {
      if (!socket.destroyed) {
        socket.write(`服务端发送的消息：${data}`)
      }
    })
  })
})
