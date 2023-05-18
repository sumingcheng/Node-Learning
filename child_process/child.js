console.log("子进程已经运行")

process.on('message', (msg) => {
  console.log(`Message from parent: ${msg}`)
})

process.send('Hello from child!')