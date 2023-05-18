const { fork } = require('child_process')
const path = require('path')

const child = fork(path.resolve(__dirname, 'child.js'))

child.on('message', (msg) => {
  console.log(`Message from child: ${msg}`)
})

child.send('Hello world!')