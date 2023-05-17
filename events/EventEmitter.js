const EventEmitter = require('events')

/*
* 自定义事件的好处
* 1. 可以自定义事件名
* 2. 自定义事件模型可以更为灵活地处理异步逻辑。事件响应可以异步发生，而不会阻塞主线程进行响应。
* 3. 自定义事件可以具有多个监听器，并且在事件触发时所有监听器都可以同时响应。这意味着应用程序可以对相同事件具有多个反应并采取适当的行动。
* */

class Order extends EventEmitter {
  constructor() {
    super()
    this.completedOrders = 0
  }
  
  // 自定义事件遵循松散耦合设计原则并提供了更多灵活性，以更好地管理应用程序中的不同部分之间的通信。
  completeOrder() {
    console.log('一个订单已完成')
    this.completedOrders ++
    this.emit('orderCompleted', this.completedOrders)
  }
}


const myOrder = new Order()

// 注册事件监听器
myOrder.on('orderCompleted', (completed) => {
  console.log(`已完成的订单个数为：${completed}`)
})


// 发布事件
myOrder.completeOrder()
