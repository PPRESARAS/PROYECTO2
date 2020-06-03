const express = require('express');
const router = express.Router();

const controller = require('../controllers/registracionController');

router.get('/', controller.index);

router.post('/', controller.checkIfExists);

module.exports = router;