// 引入net模块
const net = require('net')

// 定义主机和端口号
const HOST = '127.0.0.1'
const PORT = 3000

// 创建socket客户端连接
const client = net.createConnection({ host: HOST, port: PORT }, () => {
  // 成功连接服务端时，打印连接信息
  console.log(`Connected to server on ${HOST}:${PORT}`)
  
  // 监听用户输入事件，读取控制台输入，并将其发送给服务端
  process.stdin.on('data', (data) => {
    console.log(`Sending message to server: ${data.toString().trim()}`)
    client.write(data)
  })
})

// 设置通信编码为UTF-8
client.setEncoding('utf8')

// 监听服务端数据接收事件，打印接收到的数据
client.on('data', (data) => {
  console.log(`Received message from server: ${data}`)
})

// 监听连接关闭事件，打印连接关闭信息
client.on('close', () => {
  console.log('Connection to server closed')
})

// 监听连接错误事件，打印连接错误信息
client.on('error', (error) => {
  console.error(`Connection failed: ${error}`)
})
