const crypto = require('crypto')

const iv = Buffer.from('0000000000000000', 'utf8') // 初始化向量
const algorithm = 'aes-256-cbc' // 对称加密算法
const key = crypto.randomBytes(32) // 生成一个密钥

const cipher = crypto.createCipheriv(algorithm, key, iv)

let encrypted = cipher.update('Hello, World!', 'utf8', 'hex')
encrypted += cipher.final('hex')
console.log(encrypted)
// 输出: 3e66d9ce536f2f2470a4c76a4653d9c8

const decipher = crypto.createDecipheriv(algorithm, key, iv)
let decrypted = decipher.update(encrypted, 'hex', 'utf8')
decrypted += decipher.final('utf8')
console.log(decrypted);
// 输出: Hello, World!
