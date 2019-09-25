var events = require('events');
var eventEmitterInstance = new events.EventEmitter();

var hello = function shout () {
	console.log('Shout');
}
eventEmitterInstance.on('myName', hello);
eventEmitterInstance.emit('myName');