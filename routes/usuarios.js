var express = require('express');
var router = express.Router();

let usuarioController = require('../controllers/usuarioController');

/* GET users listing. */
router.get('/', usuarioController.Usuarios);

router.get('/buscar', usuarioController.resultadoUsuarios);

module.exports = router;
