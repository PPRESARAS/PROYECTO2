let db = require('../database/models');
let modulologin = require('../modulo-login');
let Op =db.Sequelize.Op ;


let controller = {
    login: function (req, res) {
        res.render('login')
    },
    loginPost: function(req, res) {
        modulologin.validar(req.body.EmailDeUsuario, req.body.ContraseniaDeUsuario)
        .then (resultado =>{
            console.log(resultado)
        })
    },

}

module.exports = controller;