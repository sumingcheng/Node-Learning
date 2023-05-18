const dns = require('dns')

dns.lookup('www.example.com', (err, address, family) => {
  console.log(address) // 输出 "93.184.216.34"
})

dns.lookup('www.baidu.com', (err, address, family) => {
  console.log(address) // 输出 "93.184.216.34"
})

dns.lookup('g.cn', (err, address, family) => {
  console.log(address) // 输出 "93.184.216.34"
})

dns.lookup('github.com', (err, address, family) => {
  console.log("🎡 15: family", family) // 4 表示IPC4
  console.log(address) // 输出 "93.184.216.34"
})