let db = require("../db/models/index");
let operadores = db.Sequelize.Op;

let reseniasController = {
    listado: function(req, res) {
        db.Resenias.findAll({
            include:[{
                model: Usuario,
            }]
        })
        .then(function(resultados) {
            // ACA VA A IR LA CONSECUENCIA
            res.render("resenias", {
                Resenias: Resenias
            })
        })
        .catch((errores) => {
            res.send(errores)
        })
    },
    
    best: function(req, res) {
        db.Resenias.findAll(
            {
                where: [
                    { Puntaje: { [operadores.gte]: 8} }
                ], 
                order: [
                    "Puntaje", "DESC"
                ]
            }
        )
        .then(function(resenias) {
            // ACA VA A IR LA CONSECUENCIA
            res.render("resenias", {
                resenias:resenias
            })
        })
        .catch((e) => {
            res.send(e)
        })
    },

    create: function(req, res) {
        db.Resenias.findAll()
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
            db.Resenias.create(resenias)
            .then(() => {
                res.redirect("/resenias")
            })
        }
    },
    editar: function(req, res){
        db.Resenias.findAll()
        .then((Resenias) => {

            db.Resenias.findByPk(req.params.IdResenia)
            .then((resenia) => {
                //Consecuencia final
                res.render("editarResenia", {
                    Resenias : Resenias
                })
            })

        })
    },

    actualizar: function(req, res) {
        let resenia = {
            IdResenia: req.body.IdResenia,
            IdUsuario: req.body.Usuario,
            IdPelicula: req.body.IdPelicula,
            TextoResenia: req.doby.TextoResenia,
            Puntaje: req.body.Puntaje,
            FechaCreacion: req.doby.FechaCreacion,
            FechaActualizacion: req.body.FechaActualizacion,
        }

        db.Resenias.update(resenia, {
            where: {
                IdResenia: req.params.IdResenia
            }
        })
        .then(() => {
            res.redirect("/resenias")
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

module.exports = reseniasController;