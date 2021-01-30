//requiero/importo la librería express
const express = require('express');

//De esa librería express, utilizo el método Router
//nos permite crear rutas y poder utilizarlas en otro archivo
const router = express.Router();

//Crear todas las rutas

//localhost:3000/user
router.get('/', function (req, res){
    res.send('Esta es la ruta del usr.js obtener usuario')
})

//exportar el módulo router
module.exports = router;

