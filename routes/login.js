var express = require('express');
var router = express.Router();

let login = require ('../controllers/loginController');

router.get('/', login.login);

router.post('/', login.loginPost);

module.exports = router;
