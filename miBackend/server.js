// server.js
const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');
const eventEmitter = require('./event');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'Ignacio',
  password: 'Blackmist.3',
  database: 'mi_base_de_datos'
});

db.connect(err => {
  if (err) throw err;
  console.log('Conectado a MySQL');
});

app.get('/api/usuarios/checkRun/:run', (req, res) => {
  const { run } = req.params;
  const query = 'SELECT COUNT(*) AS count FROM usuarios WHERE run = ?';

  console.log('Consulta:', query);
  console.log('RUN:', run);

  db.query(query, [run], (err, result) => {
    if (err) {
      console.error('Error:', err);
      throw err;
    }
    console.log('Resultado:', result[0].count);
    const exists = result[0].count > 0;
    res.json(exists);
  });
});

// Agregar un nuevo usuario y emitir el evento de registro
app.post('/api/usuarios', (req, res) => {
  const nuevoUsuario = req.body;
  db.query('INSERT INTO usuarios SET ?', nuevoUsuario, (err, result) => {
    if (err) throw err;
    const userWithId = { id: result.insertId, ...nuevoUsuario };
    res.json(userWithId);

    // Emitir el evento cuando se registra un nuevo usuario
    eventEmitter.emit('userRegistered', userWithId);
  });
});




//---------------------------------------------------------



// Obtener todos los usuarios
app.get('/api/usuarios', (req, res) => {
  db.query('SELECT * FROM usuarios', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});


// Agregar un nuevo usuario
app.post('/api/usuarios', (req, res) => {
  const nuevoUsuario = req.body;
  db.query('INSERT INTO usuarios SET ?', nuevoUsuario, (err, result) => {
    if (err) throw err;
    res.json({ id: result.insertId, ...nuevoUsuario });
  });
});


// Obtener un usuario por ID
app.post('/api/usuarios/login', (req, res) => {
  const { run, password } = req.body;

  if (!run || !password) {
    return res.status(400).json({ message: 'Se requiere RUN y contraseña' });
  }

  // Consulta en la base de datos para verificar las credenciales
  db.query('SELECT * FROM usuarios WHERE run = ?', [run], (err, results) => {
    if (err) throw err;

    if (results.length === 0) {
      // Si no se encuentra el usuario
      return res.status(401).json({ message: 'Usuario no encontrado' });
    }

    const usuario = results[0];

    // Comprobar si la contraseña es correcta
    if (usuario.password !== password) {
      return res.status(401).json({ message: 'Contraseña incorrecta' });
    }

    // Si las credenciales son correctas, devolver todos los datos del usuario
    res.json({
      id: usuario.id,
      nombre: usuario.nombre,
      apellido: usuario.apellido,
      email: usuario.email,
      run: usuario.run,
      edad: usuario.edad
    });
  });
});

// Obtener recetas de un usuario
app.get('/api/receta/:usuario_id', (req, res) => {
  const usuarioId = req.params.usuario_id;
  const query = `
      SELECT medicamento.nombre, receta.dia_semana, receta.hora 
      FROM receta 
      JOIN medicamento ON receta.medicamento_id = medicamento.id 
      WHERE receta.usuario_id = ?`;
  db.query(query, [usuarioId], (err, result) => {
      if (err) throw err;
      res.json(result);
  });
});

//Ver la salud de un usuario
app.get('/api/salud_usuario/:usuario_id', (req, res) => {
const usuarioId = req.params.usuario_id;
const query = `
    SELECT salud_usuario.peso, salud_usuario.altura, salud_usuario.imc 
    FROM salud_usuario 
    WHERE salud_usuario.usuario_id = ?`;
db.query(query, [usuarioId], (err, result) => {
    if (err) throw err;
    const salud = result[0];
    res.json({
        peso: salud.peso,
        altura: salud.altura,
        imc: salud.imc
    });
});
});


// Ver el historial_clinico de un usuario y su historial_medicamentos
app.get('/api/historial_clinico/:usuario_id', (req, res) => {
const usuarioId = req.params.usuario_id;

// Validar que el usuarioId es un número
if (isNaN(usuarioId)) {
  return res.status(400).json({ error: 'El usuario_id debe ser un número válido.' });
}

const query = `
    SELECT 
      hc.fecha, 
      hc.diagnostico, 
      hc.descripcion, 
      hc.tratamiento, 
      m.nombre AS medicamento_nombre
    FROM 
      historial_clinico hc
    LEFT JOIN 
      historial_medicamentos hm ON hc.id = hm.historial_id
    LEFT JOIN 
      medicamento m ON hm.medicamento_id = m.id
    WHERE 
      hc.usuario_id = ?`;

db.query(query, [usuarioId], (err, result) => {
    if (err) {
        console.error('Error al consultar el historial clínico:', err);
        return res.status(500).json({ error: 'Error en el servidor.' });
    }
    res.json(result);
});
});


// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
