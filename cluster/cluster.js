const cluster = require('cluster')
const numCPUs = require('os').cpus().length
const http = require('http')

if (cluster.isMaster) {
  // Fork workers.
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork()
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`)
  })
} else {
  const server = http.createServer((req, res) => {
    res.writeHead(200)
    res.end('请求成功')
  })

  server.listen(3000, () => {
    console.log(`Worker ${process.pid} listening on port ${server.address().port}`)
  })
}