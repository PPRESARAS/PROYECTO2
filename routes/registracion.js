var express = require('express');
var router = express.Router();

let registro = require ('../controllers/registracionController');

/* GET home page. */

router.get("/", registro.register);

router.post("/", registro.store);

module.exports = router;