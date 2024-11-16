// events.js
const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

// Disparar evento de login
function loginUser(data) {
    eventEmitter.emit('user.login', data);
}

module.exports = { eventEmitter, loginUser };
