// Rutas de usuarios Auth
// host + /api/auth
const express = require('express');
const { dbConnection } = require('./database/config');
require('dotenv').config();
const cors = require('cors');



// Crear servidor de express
const app = express();

//Base de datos
dbConnection();

// CORS
app.use(cors());

// Directorio publico
app.use(express.static('public'));

// lectura y parseo del body
app.use(express.json());

// Rutas
app.use('/api/auth', require('./routes/auth')); 
app.use('/api/tareas', require('./routes/tareas'));



// Escuchar peticiones
app.listen(process.env.PORT, () => {
    console.log(`servidor en puerto ${process.env.PORT}`);
});