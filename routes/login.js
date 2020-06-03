var express = require('express');
var router = express.Router();

const controller = require('../controllers/loginController');

// router.get(‘/‘, usersController.search);
// La tuta que va por get, es para que me muestre el formulario
//la ruta que va por post, es para borre 

router.get(‘/reviews’, usersController.logUser);

router.post('/reviews', usersController.confrimUser);

router.get('/reviews/:id', usersController.get.Reviews);

// router.get('/reviews/delete/:id', usersController.showEdit);

// router.get('/reviews/delete/:id', usersController.confirmEdit);

// router.get('/reviews/delete/:id', usersController.deleteRreview);

// router.post('/reviews/delete/:id', usersController.confirmDelete);

module.exports = router;