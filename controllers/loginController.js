let db = require('../database/models')

let moduloLogin = {
    logUser: function(req, res) {
        return res.render('login', {
            errores: false,
            EmailDeUsuario: false,
    });
},

    chequearUsuario: function (req, res) {
        return db.Usuarios.findOne({
            where: {
                EmailDeUsuario: EmailDeUsuario
            }
        })
        .then(function(NombreDeUsuario) {
            return NombreDeUsuario != null;
        })
    },

    buscarPorEmail: function (req, res){
        return db.Usuarios.findOne({
            where: {
                EmailDeUsuario:EmailDeUsuario
            }
        })
        .then(resultados => {
            return resultados
        })
    },

    validar: function (req, res) {
        return db.Usuarios.findOne({
            where:{
                EmailDeUsuario:EmailDeUsuario,
                ContraseniaDeUsuario: ContraseniaDeUsuario
            },
        })
        .then(resultados=>{
            return resultados;
        })
    }
}


module.exports = moduloLogin;