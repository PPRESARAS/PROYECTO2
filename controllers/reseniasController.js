let db = require("../database/models");
let operadores = db.Sequelize.Op;

module.exports = {
    listado: function(req, res) {
        db.Resenia.findAll({
            include:[{
                model: Usuario,
            }]
        })
        .then(function(resultados) {
            // ACA VA A IR LA CONSECUENCIA
            res.render("resenias", {
                Resenia: Resenia
            })
        })
        .catch((errores) => {
            res.send(errores)
        })
    },

    create: function(req, res) {
        db.Resenia.findAll()
        .then((resenia) => {
            res.render("nuevaResenia", {
                IdResenias: req.body.IdResenias,
                errores : false,
                EmailDeUsuario : false,
                TextoResenia : false,
                Puntaje : false,
            })
        })
        
    },

    store: function(req, res) {
        let Resenias = {
            IdResenias: req.body.IdResenias,
            IdUsuario: req.body.Usuario,
            IdPelicula: req.body.IdPelicula,
            TextoResenia: req.doby.TextoResenia,
            Puntaje: req.body.Puntaje,
            FechaCreacion: req.doby.FechaCreacion,
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
        db.Resenia.findAll()
        .then((Resenias) => {

            db.Resenia.findByPk(req.params.IdResenia)
            .then((resenia) => {
                //Consecuencia final
                res.render("editarResenia", {
                    Resenia : Resenia
                })
            })

        })
    },
    
    delete: function(req,res) {
        db.Resenia.destroy({
            where: {
                IdResenia: req.params.IdResenia
            }
        })
        .then(() => {
            res.redirect("/resenias")
        })
    }
    
}
    // best: (req, res) => {
    //     db.Resenia.findAll(
    //         {
    //             where: [
    //                 { Puntaje: { [operadores.gte]: 8} }
    //             ], 
    //             order: [
    //                 "Puntaje", "DESC"
    //             ]
    //         }
    //     )
    //     .then(function(Resenias) {
    //         // ACA VA A IR LA CONSECUENCIA
    //         res.render("resenias", {
    //             Resenias:Resenias
    //         })
    //     })
    //     .catch((e) => {
    //         res.send(e)
    //     })
    // },

    // actualizar: function(req, res) {
    //     let resenia = {
    //         IdResenia: req.body.IdResenia,
    //         IdUsuario: req.body.Usuario,
    //         IdPelicula: req.body.IdPelicula,
    //         TextoResenia: req.doby.TextoResenia,
    //         Puntaje: req.body.Puntaje,
    //         FechaCreacion: req.doby.FechaCreacion,
    //         FechaActualizacion: req.body.FechaActualizacion,
    //     }

    //     db.Resenia.update(resenia, {
    //         where: {
    //             IdResenia: req.params.IdResenia
    //         }
    //     })
    //     .then(() => {
    //         res.redirect("/resenias")
    //     })
    // },


