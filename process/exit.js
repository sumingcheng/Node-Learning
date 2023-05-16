const fs = require('fs')
const path = require('path')

// 如果存在指定文件，则删除它并退出进程
if (fs.existsSync(path.join(__dirname, 'demo.txt'))) {
  fs.unlinkSync(path.join(__dirname, 'demo.txt'))
  console.log('文件已删除，退出应用程序...')
  process.exit(0)
}

console.log('文件不存在，继续执行应用程序...')
