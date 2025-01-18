const eventEmitter = require('node:events')

class PizzaOrder extends eventEmitter {
  constructor() {
    super() //call the events class constructor
    this.orderNumber = 0
  }

  placeOrder(size) {
    this.size = size
    this.emit('pizza-order', this.size)
  }

  getOrderNumber() {
    this.orderNumber++
    console.log(`This is the current order number: ${this.orderNumber} `);
  }
}

module.exports = PizzaOrder