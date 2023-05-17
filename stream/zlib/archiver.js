const fs = require('fs')
const archiver = require('archiver')
const path = require('path')

const srcDir = path.join(__dirname, './srcFile.json') // 要压缩的JSON文件路径
const destFile = path.join(__dirname, './srcFile.zip') // 压缩后的ZIP文件路径

const output = fs.createWriteStream(destFile) // 创建一个新的可写流，指向目标ZIP文件
const archive = archiver('zip', { // 创建一个新的Archiver实例，指定输出类型和压缩级别
  zlib: { level: 9 } // 压缩级别最高
})

output.on('close', function () { // 当文件流关闭后，输出一些完成信息
  console.log(archive.pointer() + ' total bytes')
  console.log('archiver has been finalized and the output file descriptor has closed.')
})

output.on('end', function () { // 当输出完成后，输出相关信息
  console.log('Data has been drained')
})

archive.on('warning', function (err) { // 当发生warning类型的错误时（即不致命的错误），输出记录信息
  if (err.code === 'ENOENT') {
    console.warn(err)
  } else { // 否则抛出错误
    throw err
  }
})

archive.on('error', function (err) { // 当发生致命错误时，抛出错误
  throw err
})

archive.pipe(output) // 把Archiver实例的数据流输出到文件流中

archive.file(srcDir, { name: 'srcFile.json' }) // 将JSON文件添加到ZIP中，并指定文件名

archive.finalize() // 完成ZIP的构建
