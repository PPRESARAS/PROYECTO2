var express = require('express');
var router = express.Router();

const controller = require('../controllers/loginController');

// router.get(‘/‘, usersController.search);
// La ruta que va por get, es para que me muestre el formulario
//la ruta que va por post, es para borre 

router.get('/', controller.confirmUser);


// router.post('/reviews', controller.confirmUser);

router.post('/', controller.logUser);

// router.get('/reviews/:id', controller.get.reviews);


module.exports = router;