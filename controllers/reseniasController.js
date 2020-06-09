let db = require("../database/models");
let Op = db.Sequelize.Op;

module.exports = {
    listado: function(req, res) {
        db.Resenia.findAll()
        .then(function(Resenias) {
            // ACA VA A IR LA CONSECUENCIA
            res.render("resenias/resenias", {
                Resenias: Resenias
            })
        })
    },

    create: function(req, res) {
        db.Resenia.findAll()
        .then(function(resenias) {
            return res.render("resenias/crearResenia", {
                IdResenias: req.body.IdResenias,
                errores : false,
                EmailDeUsuario : false,
                TextoResenia : false,
                Puntaje : false,
            })
        })
        
    },
    guardado: function(req,res){
        db.Resenia.create({
            IdResenias: req.body.IdResenias,
            IdPelicula: req.body.IdPelicula,
            IdUsuario: req.body.IdUsuario,
            TextoResenia: req.body.TextoResenia,
            FechaCreacion: req.body.FechaCreacion,
            FechaActualizacion: req.body.FechaActualizacion,
            Puntaje: req.body.Puntaje
        });
        res.redirect("/resenias/resenias");
    },

    store: function(req, res) {
        let Resenias = {
            IdResenias: req.body.IdResenias,
            IdUsuarios: req.body.Usuarios,
            IdPelicula: req.body.IdPelicula,
            TextoResenia: req.body.TextoResenia,
            Puntaje: req.body.Puntaje,
            FechaCreacion: req.body.FechaCreacion,
            FechaActualizacion: req.body.FechaActualizacion,
            
        }

        let errores = validarResenia(Resenias)

        if (errores.length > 0) {
            // Hubieron errores => Volver a mostrar la pagina con el form y los errores
            db.Resenias.findAll()
            .then((Resenias) => {
                res.render("nuevaResenia", {
                    IdResenias: req.body.IdResenias,
                    errors : false,
                    EmailDeUsuario : false,
                    TextoResenia : false,
                    Puntaje : false,

                })
            })
        } else {
            // No hubieron errores, todo bien :)
            db.Resenia.create(resenias)
            .then(() => {
                res.redirect("/resenias")
            })
        }
    },

    editar: function(req, res){
            db.Resenia.findByPk(req.params.IdResenias)
            .then((Resenia) => {
                //Consecuencia final
                res.render("editarResenia", {Resenia : Resenia})
            });
        
        },

    delete: function(req,res) {
        db.Resenia.destroy({
            where: {
                IdResenias: req.params.Id
            }
        })
        .then(() => {
            res.redirect("/resenias")
        })
    },
    actualizar: function(req, res) {
        let resenia = {
            IdResenia: req.body.IdResenia,
            IdUsuario: req.body.Usuario,
            IdPelicula: req.body.IdPelicula,
            TextoResenia: req.body.TextoResenia,
            Puntaje: req.body.Puntaje,
            FechaCreacion: req.body.FechaCreacion,
            FechaActualizacion: req.body.FechaActualizacion,
        }

        db.Resenia.update(resenia, {
            where: {
                IdResenia: req.params.IdResenia
            }
        })
        .then(() => {
            res.redirect("/resenias")
        })
    },

    
}

  

