var express = require('express');
var router = express.Router();
let registro = require ('../controllers/registracionController');

/* GET home page. */

router.get("/register", registro.register);

router.post("/register", registro.store);

module.exports = router;