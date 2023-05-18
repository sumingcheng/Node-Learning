const { execFile } = require('child_process')
const path = require('path')
const executablePath = path.resolve(__dirname, './log.exe') // log.exe文件的路径
const args = [] // 可选的命令行参数，如果没有可以传入空数组

execFile(executablePath, args, (err, stdout, stderr) => {
  if (err) {
    console.error(err)
    return
  }

  console.log(stdout)
  console.log(stderr)
})