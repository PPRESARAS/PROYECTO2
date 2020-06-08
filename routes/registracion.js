var express = require('express');
var router = express.Router();

var controller = require('../controllers/registracionController');

router.get('/', controller.index); // guests

router.post('/', controller.checkUsuario);

module.exports = router;