const fs = require('fs')
const zlib = require('zlib')
const path = require('path')

const srcFile = path.join(__dirname, './srcFile.json')
const destFile = path.join(__dirname, './destFile.txt.gz')

const readStream = fs.createReadStream(srcFile)
const writeStream = fs.createWriteStream(destFile)

const gzip = zlib.createGzip()

// 将可读流通过管道连接到可写流中进行Gzip压缩
readStream.pipe(gzip).pipe(writeStream)

// 监听压缩结束事件，并输出提示信息
writeStream.on('finish', function () {
  console.log('文件压缩完成！')
})
