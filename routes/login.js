var express = require('express');
var router = express.Router();

const controller = require('../controllers/loginController');

// router.get(‘/‘, usersController.search);

router.get('/', controller.confirmUser);

<<<<<<< 6cbe63bf59ee165781078d7a714728a9de7b2024
router.post('/reviews', usersController.confrimUser);
=======
router.post('/', controller.logUser);
>>>>>>> correcciones

// router.get('/reviews/:id', usersController.get.Reviews);

// router.get('/reviews/delete/:id', usersController.showEdit);

// router.get('/reviews/delete/:id', usersController.confirmEdit);

module.exports = router;