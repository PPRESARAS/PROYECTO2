let db = require('../database/models');
let Op =db.Sequelize.Op ;


let moduloLogin = {
    logUser: (req, res) => {
        res.render('login') 
    },

    validar:(req, res)=>{        
      return  db.Usuario.findAll({
            where:{
                EmailDeUsuario: req.body.EmailDeUsuario,
            }
        },
        )},

       buscarPorEmail: function (req, res){
        return db.Usuarios.findAll({
            where: {
                EmailDeUsuario:EmailDeUsuario
            }
        })
        .then(resultados => {
            return resultados
        })
    },

}


module.exports = moduloLogin;