const { setTimeout, setInterval, clearInterval } = require('timers')

// 在 5 秒后执行回调函数
setTimeout(() => {
  console.log('5 seconds later')
}, 5000)

// 每 2 秒执行一次回调函数
const timer = setInterval(() => {
  console.log('2 seconds later')
}, 2000)

// 在 10 秒后停止定时器
setTimeout(() => {
  clearInterval(timer)
}, 10000)