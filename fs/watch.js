const fs = require('fs')
const path = require('path')

const filePath = path.resolve(__dirname, 'new.txt')

fs.watch(filePath, (eventType, filename) => {
  console.log(`文件 ${filename} 发生了 ${eventType} 事件`)
})
