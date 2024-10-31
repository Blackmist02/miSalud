const EventEmitter = require('events'); //emite y escucha eventos de toda la app
class AppEventEmitter extends EventEmitter {}
const appEvents = new AppEventEmitter();

module.exports = appEvents;