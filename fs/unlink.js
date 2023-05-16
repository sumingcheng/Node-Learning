const fs = require('fs')
const path = require('path')
const fileArr = ['new.txt', 'new1.txt', 'new2.txt']

for (const index in fileArr) {
  const filePath = path.join(__dirname, fileArr[index])
  
  fs.unlink(filePath, (err) => {
    if (err) {
      console.log(err)
    }
    console.log('文件删除成功')
  })
}

