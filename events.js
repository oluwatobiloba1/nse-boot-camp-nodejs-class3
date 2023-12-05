const EventEmitter = require('node:events');

const eventEmitter = new EventEmitter();


eventEmitter.on('event', (name)=>{
    console.log(`${name} emitted an event!`);
})

eventEmitter.emit('event', 'Mario');