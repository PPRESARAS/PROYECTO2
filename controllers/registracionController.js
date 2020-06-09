let db = require ('../database/models/');
let op = db.Sequelize.Op;



module.exports = {
    register:   function (req, res) {
        res.render("registracion")
    },

    store: function(req, res) {
        let Usuario = {
            NombreDeUsuario: req.body.NombreDeUsuario,
            EmailDeUsuario: req.body.EmailDeUsuario,
            ContraseniaDeUsuario: req.body.ContraseniaDeUsuario,
            FechaDeNacimiento: req.body.FechaDeNacimiento,
        }
        db.Usuario.create(Usuario)
        .then(() => {
            res.redirect("/login")
        })
    },

}
