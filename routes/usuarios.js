var express = require('express');
var router = express.Router();

let usuarioController = require('../controllers/usuarioController');

/* GET users listing. */
router.get('/', usuarioController.Usuarios);

router.get('/buscar', usuarioController.resultadoUsuarios);

router.get('/:NombreDeUsuario', usuarioController.detalleDeUsuarioPorNombre);

router.get('/miPerfil', usuarioController.miPerfil);

module.exports = router;
