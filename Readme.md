# MiSalud

¡Bienvenido a MiSalud!


## Instalación

1. Clona este repositorio en tu máquina local.
2. Instala xampp
3. En la base de datos SQLite crea la base de datos llamada "mi_base_de_datos" y pega lo siguiente (los datos de la bbdd)

use mi_base_de_datos;


create table usuarios(
    id INT AUTO_INCREMENT PRIMARY KEY,
    run VARCHAR(10) NOT NULL,
    nombre VARCHAR(30) NOT NULL,
    apellido VARCHAR(30) NOT NULL,
    email VARCHAR(30) NOT NULL,
    password VARCHAR(18) NOT NULL
);

INSERT INTO usuarios (nombre, apellido, run, email, password) VALUES ('Juan', 'Perez', '12345678-9', 'juan.perez@example.com', 'password1');
INSERT INTO usuarios (nombre, apellido, run, email, password) VALUES ('Maria', 'Gomez', '98765432-1', 'maria.gomez@example.com', 'password2');
INSERT INTO usuarios (nombre, apellido, run, email, password) VALUES ('Carlos', 'Lopez', '11223344-5', 'carlos.lopez@example.com', 'password3');
INSERT INTO usuarios (nombre, apellido, run, email, password) VALUES ('Ana', 'Martinez', '55667788-6', 'ana.martinez@example.com', 'password4');
INSERT INTO usuarios (nombre, apellido, run, email, password) VALUES ('Luis', 'Fernandez', '99887766-7', 'luis.fernandez@example.com', 'password5');
INSERT INTO usuarios (nombre, apellido, run, email, password) VALUES ('Laura', 'Diaz', '11111111-1','laura.diaz@example.com', 'password6');
INSERT INTO usuarios (nombre, apellido, run, email, password) VALUES ('Pedro', 'Sanchez', '22222222-2','pedro.sanchez@example.com', 'password7');
INSERT INTO usuarios (nombre, apellido, run, email, password) VALUES ('Sofia', 'Ramirez', '33333333-3','sofia.ramirez@example.com', 'password8');
INSERT INTO usuarios (nombre, apellido, run, email, password) VALUES ('Miguel', 'Torres','44444444-4', 'miguel.torres@example.com', 'password9');
INSERT INTO usuarios (nombre, apellido, run, email, password) VALUES ('Elena', 'Vega', '55555555-5','elena.vega@example.com', 'password10');

create table medico(
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    apellido VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    password VARCHAR(100) NOT NULL,
    run VARCHAR(100) NOT NULL,
    especialidad VARCHAR(100) NOT NULL
);

DESCRIBE usuarios;

INSERT INTO medico (nombre, apellido, email, password, run, especialidad) VALUES ('Juan', 'Perez', 'juan.perez@example.com', 'password1', '12345678-9', 'Cardiología');
INSERT INTO medico (nombre, apellido, email, password, run, especialidad) VALUES ('Maria', 'Gomez', 'maria.gomez@example.com', 'password2', '98765432-1', 'Neurología');
INSERT INTO medico (nombre, apellido, email, password, run, especialidad) VALUES ('Carlos', 'Lopez', 'carlos.lopez@example.com', 'password3', '11223344-5', 'Pediatría');
INSERT INTO medico (nombre, apellido, email, password, run, especialidad) VALUES ('Ana', 'Martinez', 'ana.martinez@example.com', 'password4', '55667788-6', 'Dermatología');
INSERT INTO medico (nombre, apellido, email, password, run, especialidad) VALUES ('Luis', 'Fernandez', 'luis.fernandez@example.com', 'password5', '99887766-7', 'Ginecología');
INSERT INTO medico (nombre, apellido, email, password, run, especialidad) VALUES ('Laura', 'Diaz', 'laura.diaz@example.com', 'password6', '22334455-6', 'Oftalmología');
INSERT INTO medico (nombre, apellido, email, password, run, especialidad) VALUES ('Pedro', 'Sanchez', 'pedro.sanchez@example.com', 'password7', '33445566-7', 'Psiquiatría');
INSERT INTO medico (nombre, apellido, email, password, run, especialidad) VALUES ('Sofia', 'Ramirez', 'sofia.ramirez@example.com', 'password8', '44556677-8', 'Oncología');
INSERT INTO medico (nombre, apellido, email, password, run, especialidad) VALUES ('Miguel', 'Torres', 'miguel.torres@example.com', 'password9', '55667788-9', 'Urología');
INSERT INTO medico (nombre, apellido, email, password, run, especialidad) VALUES ('Elena', 'Vega', 'elena.vega@example.com', 'password10', '66778899-0', 'Endocrinología');


create table medicamento(
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL
);

CREATE TABLE receta (
    id INT AUTO_INCREMENT PRIMARY KEY,
    usuario_id INT,
    medicamento_id INT,
    dia_semana VARCHAR(10), -- Guardar el día (Lunes, Martes, etc.)
    hora TIME,
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id),
    FOREIGN KEY (medicamento_id) REFERENCES medicamento(id)
);
INSERT INTO medicamento (nombre) VALUES ('Paracetamol');
INSERT INTO medicamento (nombre) VALUES ('Ibuprofeno');
INSERT INTO medicamento (nombre) VALUES ('Amoxicilina');
INSERT INTO medicamento (nombre) VALUES ('Omeprazol');
INSERT INTO medicamento (nombre) VALUES ('Metformina');
INSERT INTO medicamento (nombre) VALUES ('Aspirina');
INSERT INTO medicamento (nombre) VALUES ('Loratadina');
INSERT INTO medicamento (nombre) VALUES ('Simvastatina');
INSERT INTO medicamento (nombre) VALUES ('Levotiroxina');
INSERT INTO medicamento (nombre) VALUES ('Atorvastatina');

INSERT INTO receta (usuario_id, medicamento_id, dia_semana, hora) VALUES (1, 1, 'Lunes', '08:00:00');
INSERT INTO receta (usuario_id, medicamento_id, dia_semana, hora) VALUES (1, 6, 'Sabado', '13:00:00');
INSERT INTO receta (usuario_id, medicamento_id, dia_semana, hora) VALUES (17, 2, 'Martes', '09:00:00');
INSERT INTO receta (usuario_id, medicamento_id, dia_semana, hora) VALUES (18, 3, 'Miercoles', '10:00:00');
INSERT INTO receta (usuario_id, medicamento_id, dia_semana, hora) VALUES (19, 4, 'Jueves', '11:00:00');
INSERT INTO receta (usuario_id, medicamento_id, dia_semana, hora) VALUES (20, 5, 'Viernes', '12:00:00');
INSERT INTO receta (usuario_id, medicamento_id, dia_semana, hora) VALUES (17, 7, 'Domingo', '14:00:00');
INSERT INTO receta (usuario_id, medicamento_id, dia_semana, hora) VALUES (18, 8, 'Lunes', '15:00:00');
INSERT INTO receta (usuario_id, medicamento_id, dia_semana, hora) VALUES (19, 9, 'Martes', '16:00:00');
INSERT INTO receta (usuario_id, medicamento_id, dia_semana, hora) VALUES (20, 10, 'Miercoles', '17:00:00');


create table cita(
    id INT AUTO_INCREMENT PRIMARY KEY,
    usuario_id INT,
    medico_id INT,
    fecha DATE,
    hora TIME,
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id),
    FOREIGN KEY (medico_id) REFERENCES medico(id)
);

create table examen(
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100),
    descripcion TEXT
);


create table resultado_examen(
    id INT AUTO_INCREMENT PRIMARY KEY,
    examen_id INT,
    usuario_id INT,
    resultado TEXT,
    FOREIGN KEY (examen_id) REFERENCES examen(id),
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
);

create table salud_usuario(
    id INT AUTO_INCREMENT PRIMARY KEY,
    usuario_id INT,
    peso DECIMAL(5,2),
    altura DECIMAL(5,2),
    imc DECIMAL(5,2),
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
);

INSERT INTO cita (usuario_id, medico_id, fecha, hora) VALUES (1, 1, '2023-10-01', '09:00:00');
INSERT INTO cita (usuario_id, medico_id, fecha, hora) VALUES (17, 2, '2023-10-02', '10:00:00');
INSERT INTO cita (usuario_id, medico_id, fecha, hora) VALUES (18, 3, '2023-10-03', '11:00:00');
INSERT INTO cita (usuario_id, medico_id, fecha, hora) VALUES (19, 4, '2023-10-04', '12:00:00');
INSERT INTO cita (usuario_id, medico_id, fecha, hora) VALUES (20, 5, '2023-10-05', '13:00:00');
INSERT INTO cita (usuario_id, medico_id, fecha, hora) VALUES (21, 6, '2023-10-06', '14:00:00');
INSERT INTO cita (usuario_id, medico_id, fecha, hora) VALUES (22, 7, '2023-10-07', '15:00:00');
INSERT INTO cita (usuario_id, medico_id, fecha, hora) VALUES (23, 8, '2023-10-08', '16:00:00');
INSERT INTO cita (usuario_id, medico_id, fecha, hora) VALUES (24, 9, '2023-10-09', '17:00:00');
INSERT INTO cita (usuario_id, medico_id, fecha, hora) VALUES (25, 10, '2023-10-10', '18:00:00');

INSERT INTO examen (nombre, descripcion) VALUES ('Examen de Sangre', 'Análisis de sangre completo');
INSERT INTO examen (nombre, descripcion) VALUES ('Examen de Orina', 'Análisis de orina completo');
INSERT INTO examen (nombre, descripcion) VALUES ('Radiografía', 'Radiografía de tórax');
INSERT INTO examen (nombre, descripcion) VALUES ('Electrocardiograma', 'ECG para evaluar el corazón');
INSERT INTO examen (nombre, descripcion) VALUES ('Ecografía', 'Ecografía abdominal');
INSERT INTO examen (nombre, descripcion) VALUES ('Resonancia Magnética', 'RMN de cerebro');
INSERT INTO examen (nombre, descripcion) VALUES ('Tomografía', 'TAC de abdomen');
INSERT INTO examen (nombre, descripcion) VALUES ('Prueba de Esfuerzo', 'Prueba de esfuerzo cardíaco');
INSERT INTO examen (nombre, descripcion) VALUES ('Examen de Vista', 'Evaluación de la visión');
INSERT INTO examen (nombre, descripcion) VALUES ('Examen de Audición', 'Evaluación de la audición');

INSERT INTO resultado_examen (examen_id, usuario_id, resultado) VALUES (1, 1, 'Normal');
INSERT INTO resultado_examen (examen_id, usuario_id, resultado) VALUES (2, 17, 'Normal');
INSERT INTO resultado_examen (examen_id, usuario_id, resultado) VALUES (3, 18, 'Anormal');
INSERT INTO resultado_examen (examen_id, usuario_id, resultado) VALUES (4, 19, 'Normal');
INSERT INTO resultado_examen (examen_id, usuario_id, resultado) VALUES (5, 20, 'Anormal');
INSERT INTO resultado_examen (examen_id, usuario_id, resultado) VALUES (6, 21, 'Normal');
INSERT INTO resultado_examen (examen_id, usuario_id, resultado) VALUES (7, 22, 'Normal');
INSERT INTO resultado_examen (examen_id, usuario_id, resultado) VALUES (8, 23, 'Anormal');
INSERT INTO resultado_examen (examen_id, usuario_id, resultado) VALUES (9, 24, 'Normal');
INSERT INTO resultado_examen (examen_id, usuario_id, resultado) VALUES (10, 25, 'Normal');

INSERT INTO salud_usuario (usuario_id, peso, altura, imc) VALUES (1, 70.5, 1.75, 23.0);
INSERT INTO salud_usuario (usuario_id, peso, altura, imc) VALUES (17, 65.0, 1.68, 23.0);
INSERT INTO salud_usuario (usuario_id, peso, altura, imc) VALUES (18, 80.0, 1.80, 24.7);
INSERT INTO salud_usuario (usuario_id, peso, altura, imc) VALUES (19, 55.0, 1.60, 21.5);
INSERT INTO salud_usuario (usuario_id, peso, altura, imc) VALUES (20, 90.0, 1.85, 26.3);
INSERT INTO salud_usuario (usuario_id, peso, altura, imc) VALUES (21, 75.0, 1.70, 25.9);
INSERT INTO salud_usuario (usuario_id, peso, altura, imc) VALUES (22, 68.0, 1.72, 23.0);
INSERT INTO salud_usuario (usuario_id, peso, altura, imc) VALUES (23, 77.0, 1.78, 24.3);
INSERT INTO salud_usuario (usuario_id, peso, altura, imc) VALUES (24, 85.0, 1.82, 25.6);
INSERT INTO salud_usuario (usuario_id, peso, altura, imc) VALUES (25, 60.0, 1.65, 22.0);


CREATE TABLE historial_clinico (
   id INT AUTO_INCREMENT PRIMARY KEY,
   usuario_id INT,
   fecha DATE,
   diagnostico INT,
   descripcion TEXT,
   tratamiento TEXT,
   FOREIGN KEY (usuario_id) REFERENCES usuarios(id),
   FOREIGN KEY (diagnostico) REFERENCES examen(id)
);


CREATE TABLE historial_medicamentos (
    historial_id INT,
    medicamento_id INT,
    PRIMARY KEY (historial_id, medicamento_id),
    FOREIGN KEY (historial_id) REFERENCES historial_clinico(id),
    FOREIGN KEY (medicamento_id) REFERENCES medicamento(id)
);




INSERT INTO historial_clinico (usuario_id, fecha, diagnostico, descripcion, tratamiento) VALUES (1, '2023-01-01', 1, 'Diagnóstico de hipertensión', 'Tratamiento con antihipertensivos');
INSERT INTO historial_clinico (usuario_id, fecha, diagnostico, descripcion, tratamiento) VALUES (17, '2023-02-01', 2, 'Diagnóstico de diabetes tipo 2', 'Tratamiento con insulina y dieta controlada');
INSERT INTO historial_clinico (usuario_id, fecha, diagnostico, descripcion, tratamiento) VALUES (18, '2023-03-01', 3, 'Diagnóstico de asma', 'Tratamiento con inhaladores y broncodilatadores');
INSERT INTO historial_clinico (usuario_id, fecha, diagnostico, descripcion, tratamiento) VALUES (19, '2023-04-01', 4, 'Diagnóstico de artritis reumatoide', 'Tratamiento con antiinflamatorios y fisioterapia');
INSERT INTO historial_clinico (usuario_id, fecha, diagnostico, descripcion, tratamiento) VALUES (20, '2023-05-01', 5, 'Diagnóstico de migraña crónica', 'Tratamiento con analgésicos y terapia preventiva');
INSERT INTO historial_clinico (usuario_id, fecha, diagnostico, descripcion, tratamiento) VALUES (21, '2023-06-01', 6, 'Diagnóstico de insuficiencia cardíaca', 'Tratamiento con diuréticos y betabloqueantes');
INSERT INTO historial_clinico (usuario_id, fecha, diagnostico, descripcion, tratamiento) VALUES (22, '2023-07-01', 7, 'Diagnóstico de depresión mayor', 'Tratamiento con antidepresivos y terapia psicológica');
INSERT INTO historial_clinico (usuario_id, fecha, diagnostico, descripcion, tratamiento) VALUES (23, '2023-08-01', 8, 'Diagnóstico de hipotiroidismo', 'Tratamiento con levotiroxina');
INSERT INTO historial_clinico (usuario_id, fecha, diagnostico, descripcion, tratamiento) VALUES (24, '2023-09-01', 9, 'Diagnóstico de enfermedad pulmonar obstructiva crónica (EPOC)', 'Tratamiento con broncodilatadores y oxigenoterapia');
INSERT INTO historial_clinico (usuario_id, fecha, diagnostico, descripcion, tratamiento) VALUES (25, '2023-10-01', 10, 'Diagnóstico de anemia ferropénica', 'Tratamiento con suplementos de hierro y dieta rica en hierro');



INSERT INTO historial_clinico (usuario_id, fecha, diagnostico, descripcion, tratamiento) VALUES (19, '2023-04-01', 4, 'Diagnóstico de artritis reumatoide', 'Tratamiento con antiinflamatorios y fisioterapia');
INSERT INTO historial_clinico (usuario_id, fecha, diagnostico, descripcion, tratamiento) VALUES (18, '2023-11-01', 5, 'Diagnóstico de hipertensión', 'Tratamiento con antihipertensivos');


INSERT INTO historial_medicamentos (historial_id, medicamento_id) VALUES (1, 1);
INSERT INTO historial_medicamentos (historial_id, medicamento_id) VALUES (2, 2);
INSERT INTO historial_medicamentos (historial_id, medicamento_id) VALUES (3, 3);
INSERT INTO historial_medicamentos (historial_id, medicamento_id) VALUES (4, 4);
INSERT INTO historial_medicamentos (historial_id, medicamento_id) VALUES (5, 5);
INSERT INTO historial_medicamentos (historial_id, medicamento_id) VALUES (6, 6);
INSERT INTO historial_medicamentos (historial_id, medicamento_id) VALUES (7, 7);
INSERT INTO historial_medicamentos (historial_id, medicamento_id) VALUES (8, 8);
INSERT INTO historial_medicamentos (historial_id, medicamento_id) VALUES (9, 9);
INSERT INTO historial_medicamentos (historial_id, medicamento_id) VALUES (10, 10);



INSERT INTO historial_medicamentos (historial_id, medicamento_id) VALUES (11, 4);
INSERT INTO historial_medicamentos (historial_id, medicamento_id) VALUES (12, 5);


4. Para que funcione correctamente tienes que cambiar los datos del archivo /miBackend/server.js

const db = mysql.createConnection({
    host: 'localhost',
    user: 'Ignacio',
    password: 'Blackmist.3',
    database: 'mi_base_de_datos'
  });

  por su usuario




5. Abre una terminal y navega hasta la carpeta del proyecto.
6. Ejecuta el siguiente comando para instalar las dependencias:

    ```
    npm install
    ```

7. Inicia el servidor 

    ```
    node server.js
    ```

8. Inicia la aplicación con el siguiente comando:

    ```
    ionic serve
    ```
