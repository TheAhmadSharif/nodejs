var event = require('events').EventEmitter;

var a = new event;

a.on('functionName', function() {
    console.log('Event called');
})

a.emit('functionName')

