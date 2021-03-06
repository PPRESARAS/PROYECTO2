var express = require('express');
var router = express.Router();

let reseniasController = require("../controllers/reseniasController");

// router.get('/misResenias', reseniasController.store);

router.get('/resenias', reseniasController.listado);

router.get('/crear', reseniasController.create);

router.post('/crear', reseniasController.guardado);

router.get('/editarResenia/:id', reseniasController.editar);

router.post('/editarResenia/:id', reseniasController.editar);

router.get('/borrarResenia/:id', reseniasController.delete);

router.post('/borrarResenia/:id', reseniasController.delete);

module.exports = router;