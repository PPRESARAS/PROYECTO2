/* Modulo login descargado de playground */

let db = require('./database/models')

let moduloLogin = {
    chequearUsuario: function (EmailDeUsuario) {
        return db.Usuarios.findOne({
            where: {
                EmailDeUsuario: EmailDeUsuario
            }
        })
        .then(function(Usuarios) {
            return Usuarios != null;
        })
    },

    buscarPorEmail: function (EmailDeUsuario){
        return db.Usuarios.findOne({
            where: {
                EmailDeUsuario:EmailDeUsuario 
            }
        })
        .then(resultados => {
            return resultados
        })
    },

    validar: function (EmailDeUsuario, ContraseniaDeUsuario) {
        return db.Usuario.findOne({
            where:{
                EmailDeUsuario: EmailDeUsuario,
                ContraseniaDeUsuario: ContraseniaDeUsuario,
            },
        })
        .then(resultados=>{
            return resultados;
        })
    }
}


module.exports = moduloLogin;