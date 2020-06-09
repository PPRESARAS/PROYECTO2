let db = require('../database/models');
let modulologin = require('../modulo-login');
let Op =db.Sequelize.Op ;


module.exports= {
    login: function (req, res) {
        res.render('login')
    },
    loginPost: function(req, res) {
        modulologin.validar(req.body.EmailDeUsuario, req.body.ContraseniaDeUsuario)
        .then(function(resultados) {
        res.render("index", {resultados: resultados})
    })
    }
}
