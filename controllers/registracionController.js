let db = require ('../database/models');
let op = db.Sequelize.Op;



let registracionController = {
    register: (req, res) => {
        res.render("registracion")
    },

    store: (req, res) => {
        let Usuario = {
            NombreDeUsuario: req.body.NombreDeUsuario,
            EmailDeUsuario: req.body.EmailDeUsuario,
            ContraseniaDeUsuario: req.body.ContraseniaDeUsuario,
        }
        db.Usuarios.create(Usuario)
            res.redirect("/login")
        .then(() => {
            res.send("USUARIO CREADO")
        })
    },


}
module.exports = registracionController;