let express = require('express');
let router = express.Router();

let controller = require('../controllers/registracionController');

router.get('/', controller.index); // guests

router.post('/', controller.checkIfExists);

module.exports = router;
