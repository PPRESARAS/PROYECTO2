const express = require('express');
const router = express.Router();

const controller = require('../controllers/usersController');
const reviewsController = require('../controllers/reviewsController');

router.get('/', controller.index);

router.get('/search', controller.findUsers);

router.get('/:username', controller.userDetailByUsername);

module.exports = router;

