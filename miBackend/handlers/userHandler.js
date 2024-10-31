const eventEmitter = require('./event.js');

eventEmitter.on('userRegistered', (newUser) => {
    console.log('Nuevo usuario registrado:', newUser);
    //revisar como utilizar node mailer para enviar un correo de bienvenida
});