const https = require('https')
const fs = require('fs')

const options = {
  key: fs.readFileSync('./key.pem'),
  cert: fs.readFileSync('./cert.pem')
}

https.createServer(options, (req, res) => {
  res.write('Hello World!')
  res.end()
}).listen(443, '127.0.0.1', () => {
  console.log('HTTPS server listening on port 443.')
  console.log('https://127.0.0.1:443')
})