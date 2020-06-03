const express = require('express');
const router = express.Router();

const controller = require('../controllers/usuarioController');


router.get('/', controller.index);

router.get('/search', controller.buscarUsuarios);

router.get('/:NombreDeUsuario', controller.detalleDeUsuarioPorNombre);

module.exports = router;

