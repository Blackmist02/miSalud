const nodemailer = require('nodemailer');

async function enviarCorreo(datosCorreo) {
    const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
        user: datosCorreo.correoRemite,
        pass: datosCorreo.contraseña
    }
    });

    const mailOptions = {
    from: datosCorreo.correoRemite,
    to: datosCorreo.correoDestino,
    subject: datosCorreo.asunto,
    text: datosCorreo.mensaje
    };

    try {
    await transporter.sendMail(mailOptions);
        console.log('Correo enviado exitosamente');
        return { mensaje: 'Correo enviado exitosamente' };
    } catch (error) {
        console.log(error);
        return { error: 'Error al enviar correo' };
    }
}

module.exports = { enviarCorreo };