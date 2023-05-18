const util = require('util')

// 对于字符串，可以直接使用 %s 占位符
const str = util.format('Hello, %s!', 'world')
console.log(str) // Output: 'Hello, world!'

// 对于数字类型，可以使用 %d 占位符
const num = util.format('The answer is %d', 42)
console.log(num) // Output: 'The answer is 42'

// 对于 JSON 格式的对象，可以使用 %j 占位符
const obj = { name: 'Tom', age: 18 }
const json = util.format('json: %j', obj)
console.log(json) // Output: 'json: {"name":"Tom","age":18}'

// 对于对象，可以使用 %o 占位符
console.log(util.format('obj: %o', obj))

// 对于浮点数，可以使用 %f 占位符
console.log(util.format('pi = %f', Math.PI))

// 对于 CSS 格式字符串，可以使用 %c 占位符
console.log(util.format('%cHello, world!', 'color:red;font-size:24px;'))