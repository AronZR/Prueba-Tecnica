const express = require('express');

// Crear servidor de express
const app = express();

// Rutas
app.get('/', (req, res) => {
    res.json({
        ok: true,
    });
});





// Escuchar peticiones
app.listen(4000, () => {
    console.log(`servidor en puerto ${4000}`);
});