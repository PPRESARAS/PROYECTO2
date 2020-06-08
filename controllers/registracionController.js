let db = require ('../database/models');
let op = db.Sequelize.Op;



module.exports = {
    register: (req, res) => {
        res.render("registracion")
    },

    store: (req, res) => {
        let Usuarios = {
            NombreDeUsuario: req.body.NombreDeUsuario,
            EmailDeUsuario: req.body.EmailDeUsuario,
            ContraseniaDeUsuario: req.body.ContraseniaDeUsuario,
        }
        db.Usuario.create(Usuario)
            res.redirect("/login")
        .then(() => {
            res.send("USUARIO CREADO")
        })
        .catch(error => {
            res.send(error)
        })
    },

}
