const fs = require('fs')
const path = require('path')

const filePath = path.join(__dirname, 'new.txt')

fs.appendFile(filePath, '追加内容', (err) => {
  if (err) {
    console.log(err)
  }
  console.log('内容追加成功')
})
