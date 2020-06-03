var express = require('express');
var router = express.Router();

const controller = require('../controllers/loginController');

// router.get(‘/‘, usersController.search);
// La ruta que va por get, es para que me muestre el formulario
//la ruta que va por post, es para borre 

router.get('/', controller.confirmUser);

<<<<<<< HEAD
<<<<<<< 6cbe63bf59ee165781078d7a714728a9de7b2024
router.post('/reviews', usersController.confrimUser);
=======
router.post('/', controller.logUser);
>>>>>>> correcciones
=======
router.post('/', controller.logUser);
>>>>>>> master

router.get('/reviews/:id', usersController.get.Reviews);


module.exports = router;