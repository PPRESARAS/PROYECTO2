let db = require('./database/models')

let moduloLogin = {
    chequearUsuario: function (EmailDeUsuario) {
        return db.Usuario.findOne({
            where: {
                EmailDeUsuario: EmailDeUsuario
            }
        })
        .then(function(NombreDeUsuario) {
            return NombreDeUsuario != null;
        })
    },

    buscarPorEmail: function (EmailDeUsuario){
        return db.Usuario.findOne({
            where: {
                EmailDeUsuario:EmailDeUsuario
            }
        })
        .then(resultado=> {
            return resultado
        })
    },

    validar: function (EmailDeUsuario, ContraseniaDeUsuario) {
        return db.Usuario.findOne({
            where:{
                EmailDeUsuario:EmailDeUsuario,
                ContraseniaDeUsuario: ContraseniaDeUsuario
            },
        })
        .then(results=>{
            return results;
        })
    }
}


module.exports = moduloLogin;