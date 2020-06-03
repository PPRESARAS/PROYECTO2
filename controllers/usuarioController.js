let DB = require('../database/models');
let Op = DB.Sequelize.Op;
let { Resenia } = require('../database/models');

module.exports = {
    index: function(req, res) { // todos los usuarios
        DB
            .Usuario
            .findAll()
            .then(function (resultados) {
                return res.send(resultados);
            })
            .catch(function (error) {
                return res.send(error);
            })
    },

    buscarUsuarios: function (req, res) {  // buscar usuarios
        DB
            .Usuario
            .findAll(
                {
                    where: {
                        [Op.or]: [
                            {
                                NombreDeUsuario: { [Op.substring] : req.query.search }
                            },
                            {
                                EmailDeUsuario: { [Op.substring] : req.query.search }
                            }
                        ]
                    },
                }
            )
            .then(function(results) {
                return res.render('usuarios/index', {
                    resultados : resultados, 
                    IdUsuarios : resultados.IdUsuarios,
                    NombreDeUsuario : resultados.NombreDeUsuario,
                    EmailDeUsuario: resultados.EmailDeUsuario,
                    FechaDeNacimiento: resultados.FechaDeNacimiento,
                });
            })
            .catch(function(results) {
                return res.send(error);
            })
    },

    detalleDeUsuarioPorNombre: function(req, res) { // buscar usuarios y reseñas
        DB
            .Usuario
            .findOne(
            {
                where: {
                    NombreDeUsuario: req.params.NombreDeUsuario,
                },
                raw: false,
                nest: true,
                include: [
                    { 
                        model: resenias,
                        raw: true,
                        as: 'resenia',
                        required: false,
                    }
                ]
            })
            .then(function (resultados) {
                return res.render(
                    'usuarios/miPerfil', 
                {
                    IdUsuarios : resultados.IdUsuarios,
                    NombreDeUsuario : resultados.NombreDeUsuario,
                    EmailDeUsuario: resultados.EmailDeUsuario,
                    FechaDeNacimiento: resultados.FechaDeNacimiento,
                    resenia: resultados.resenia,
                }
                );
            })
            .catch(function (error) {
                console.log(error)
                return res.send(error)
            })
    },

    myProfile: function(req, res, resultados) { // mi perfil
        DB
            .Usuario
            .findOne(
                {
                    where: {
                        EmailDeUsuario: resultados.EmailDeUsuario,
                    },
                    raw: false,
                    nest: true,
                    include: [
                    { 
                        model: resenias,
                        raw: true,
                        as: 'resenia',
                        required: false,
                    }
                ]
                }
            )
            .then(function (resultados) {
                return res.render(
                    'usuarios/miPerfil', 
                {
                    IdUsuarios : resultados.IdUsuarios,
                    NombreDeUsuario : resultados.NombreDeUsuario,
                    EmailDeUsuario: resultados.EmailDeUsuario,
                    FechaDeNacimiento: resultados.FechaDeNacimiento,
                    resenia: resultados.resenia,
                }
                );
            })
            .catch(function (error) {
                return res.send(error);
            })
    }
}