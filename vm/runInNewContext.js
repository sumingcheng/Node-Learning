const vm = require('vm')

const contextObject = {
  animal: 'cat',
  count: 2
}

vm.runInNewContext('count += 1; name = "kitty"', contextObject)

console.log(contextObject);

// 打印: { animal: 'cat', count: 3, name: 'kitty' }