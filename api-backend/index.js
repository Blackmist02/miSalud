// index.js
const express = require('express');
const cors = require('cors');
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
res.send('Bienvenido a la API');
});

// Ejemplo de endpoint GET
app.get('/usuarios', (req, res) => {
const usuarios = [
    { id: 1, nombre: 'Juan' },
    { id: 2, nombre: 'María' }
];
res.json(usuarios);
});

// Ejemplo de endpoint POST
app.post('/usuarios', (req, res) => {
const nuevoUsuario = req.body;
// Aquí podrías guardar el usuario en una base de datos
res.json({ mensaje: 'Usuario creado', usuario: nuevoUsuario });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
console.log(`Servidor escuchando en el puerto ${PORT}`);
});