const { fork } = require('child_process')
const path = require('path')

const child = fork(path.resolve(__dirname, './child.js'))

child.on('message', (msg) => {
  console.log(`家长从孩子收到消息: ${msg}`)
  
  process.stdin.on('data', (data) => {
    child.send(data.toString())
  })
})
