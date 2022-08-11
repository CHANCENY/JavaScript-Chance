const eventEmitter = require('events');
const uuid = require('uuid');

//example of uuid
//console.log(uuid.v4());

class Logger extends eventEmitter{

    logMessage(msg){
        this.emit('message',{id: uuid.v4(), msg:msg})
    }
}

module.exports = Logger;