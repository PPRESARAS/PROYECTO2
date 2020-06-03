var express = require('express');
var router = express.Router();

const controller = require('../controllers/loginController');

// router.get(‘/‘, usersController.search);

router.get('/', controller.confirmUser);

router.post('/', controller.logUser);

// router.get('/reviews/:id', usersController.get.Reviews);

// router.get('/reviews/delete/:id', usersController.showEdit);

// router.get('/reviews/delete/:id', usersController.confirmEdit);

module.exports = router;