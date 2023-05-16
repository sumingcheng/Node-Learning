const fs = require('fs')
const path = require('path')

const filePath = path.join(__dirname, 'new.txt')
const newPath = path.join(__dirname, 'new1.txt')

fs.rename(filePath, newPath, (err) => {
  if (err) throw err;
  console.log('文件已重命名！');
})
