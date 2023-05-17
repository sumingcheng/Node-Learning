const fs = require('fs')
const path = require('path')

const filePath = path.resolve(__dirname, './file.txt')
const newFile = path.resolve(__dirname, './newFile.txt')
// 创建一个可读流读取文件内容
const readStream = fs.createReadStream(filePath, 'utf8')

// 创建一个可写流写入内容到新文件
const writeStream = fs.createWriteStream(newFile, 'utf8')

// 通过管道将可读流连接到可写流，实现文件内容的复制
readStream.pipe(writeStream)


// 监听可写流的 finish 事件
writeStream.on('finish', () => {
  console.log('写入完成')
})

/*
* 流式写入能够更好地处理大量数据的写入，提高写入效率、降低程序出错的风险，同时也可以更好的管理和控制写入数据的过程。
* */
