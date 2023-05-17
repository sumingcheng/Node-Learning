const EventEmitter = require('events')

const event = new EventEmitter()

event.on('event', () => {
  console.log('event 事件触发1')
})

event.on('event', () => {
  console.log('event 事件触发2')
})

event.on('event', () => {
  console.log('event 事件触发3')
})

event.emit('event')

// event 事件触发1
// event 事件触发2
// event 事件触发3

/*
* 事件触发的顺序是依次执行的，而不是并行执行的。
* 由此可见，node的自定义事件是10分方便扩展的，可以在任何地方触发事件，而不用担心事件的监听函数是否已经定义。
* */
