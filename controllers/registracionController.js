let db = require ('../database/models');
let op = db.Sequelize.Op;



let registracionController ={
    register: function(req, res) {
        res.render("register");
    },

    store: function(req, res) {
        let Usuario = {
            NombreDeUsuario: req.body.NombreDeUsuario,
            EmailDeUsuario: req.body.EmailDeUsuario,
            ContraseniaDeUsuario: req.body.ContraseniaDeUsuario,
        }

        db.Usuario.create(Usuario)
        .then(() => {
            res.send("USUARIO CREADO")
        })
    }


}
module.exports = registracionController;