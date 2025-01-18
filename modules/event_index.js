const EventEmitter = require('node:events')
const pizzaOrder = require('./pizzaOrderEvent')

const emitter = new EventEmitter() //not a built-in, its from above const

/**
 * Basic
 */
// emitter.on('order-pizza', (size) => { // Event Listener
//   console.log(`Preparing your ${size} pizza`)
// })

// emitter.on('order-pizza', (size) => {
//   if(size === 'personal') {
//     console.log('Next time make him buy bigger pizza hehehe..');
//   }
// })

// console.log('You are at Pizza Hut');
// // Event trigger, till this event triggers the listener wont work
// emitter.emit('order-pizza', 'personal') // event_name, argument

const order = new pizzaOrder()

order.on('pizza-order', (size) => {
  console.log(`Preparing has started for ${size}`);
})

order.placeOrder('Medium')
order.getOrderNumber()