const fs = require('fs')
const path = require('path')

const filePath = path.join(__dirname, 'new.txt')

fs.writeFile(filePath, '???', (err) => {
  if (err) {
    console.log(err)
  }
  console.log('文件写入成功')
})
