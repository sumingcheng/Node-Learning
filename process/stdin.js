const process = require('process')

process.stdin.on('data', (data) => {
  console.log(`Input received: ${data}`)
})

process.stdin.on('end', () => {
  console.log('Input ended')
})
