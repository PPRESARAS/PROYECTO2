var express = require('express');
var router = express.Router();

const controller = require('../controllers/usuarioController');
// const reviewsController = require('../controllers/reviewsController');

router.get('/', controller.index);

router.get('/search', controller.buscarUsuarios);

router.get('/:NombreDeUsuario', controller.detalleDeUsuarioPorNombre);

module.exports = router;
