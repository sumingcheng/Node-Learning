const tls = require('tls')
const fs = require('fs')
const path = require('path')

// 导入密钥和证书
const serverKey = fs.readFileSync(path.join(__dirname, './server-key.pem'))
const serverCert = fs.readFileSync(path.join(__dirname, './server-cert.pem'))

// 创建 TLS 选项
const options = {
  key: serverKey,
  cert: serverCert
}

// 创建 TLS 服务器
const server = tls.createServer(options, (socket) => {
  console.log('服务器已接入', socket.authorized ? '已授权' : '未授权')
  socket.write('欢迎来到 TLS 服务器示例！')
  socket.setEncoding('utf8')
  socket.pipe(socket)
})

// 监听指定端口
server.listen(9999, () => {
  console.log('服务器已启动')
  console.log('服务器地址：', `http://localhost:` + server.address().port)
})