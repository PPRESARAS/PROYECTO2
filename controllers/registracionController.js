let db = require ('../database/models/');
let op = db.Sequelize.Op;



module.exports = {
    register: (req, res) => {
        res.render("registracion")
    },

    store: (req, res) => {
        let Usuario = {
            NombreDeUsuario: req.body.NombreDeUsuario,
            EmailDeUsuario: req.body.EmailDeUsuario,
            ContraseniaDeUsuario: req.body.ContraseniaDeUsuario,
            FechaDeNacimiento: req.body.FechaDeNacimiento
        }
        db.Usuario.create(Usuario)
        .then(() => {
            res.redirect("/login")
            res.send("USUARIO CREADO")
        })
    },

}
