const fs = require('fs')
const path = require('path')
const jsonData = path.join(__dirname, 'getJSON.json')


const chunkSize = 2048 // 每次读取的字节数


let buf = Buffer.alloc(0) // 记录已读取的字节数组
let chunks = [] // 记录读取的缓冲区数据


// 创建可读流
const readStream = fs.createReadStream(jsonData, { highWaterMark: chunkSize })


// 监听data事件
readStream.on('data', chunk => {
  chunks.push(chunk)
  buf = Buffer.concat([buf, chunk], buf.length + chunk.length)
})


// 监听end事件
readStream.on('end', () => {
  const dataString = buf.toString()
  const jsonDataObj = JSON.parse(dataString)
  let obj = jsonDataObj[0]
  console.log(obj)
})
