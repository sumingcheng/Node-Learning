const http = require('http')
// 发送请求
const options = {
  hostname: 'jsonplaceholder.typicode.com',
  port: 80,
  path: '/posts/1',
  method: 'GET'
}

const req = http.request(options, (res) => {
  console.log(`statusCode: ${res.statusCode}`)
  
  res.on('data', (data) => {
    // 数据是以流的形式返回的，所以需要转换成字符串
    console.log(data.toString())
  })
})
// 错误处理
req.on('error', (error) => {
  console.error(error)
})


// 发送请求
req.end()
