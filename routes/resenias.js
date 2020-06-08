var express = require('express');
var router = express.router();
let controller = require("../controller/reseniasController");

router.get('/misResenias', reseniasController.listado);

router.get('/login', controller.login),

router.post('/resenias', reseniasController.listado);

router.get('/editarResenia/:id', controller.editar);

router.post('/editarResenia/:id', controller.editarResenia);

router.get('/borrarResenia/:id', controller.borrar);

router.post('/borrarResenia/:id', controller.borrarResenia);