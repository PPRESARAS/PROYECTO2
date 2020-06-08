let db = require ('../database/models');
let op = db.Sequelize.Op;



let registracionController ={
    register: function(req, res) {
        res.render("registracion");
    },

    store: function(req, res) {
        let Usuarios = {
            NombreDeUsuario: req.body.NombreDeUsuario,
            EmailDeUsuario: req.body.EmailDeUsuario,
            ContraseniaDeUsuario: req.body.ContraseniaDeUsuario,
        }

        db.Usuarios.create(Usuarios)
        .then(() => {
            res.send("USUARIO CREADO")
        })
    }


}
module.exports = registracionController;