const eventEmitter = require('events');


class myEmitter extends eventEmitter{

}

const myemitter = new myEmitter();
myemitter.on('event',() => console.log("Event happened"));

myemitter.emit('event');