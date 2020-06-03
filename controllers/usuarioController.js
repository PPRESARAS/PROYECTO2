const DB = require('../database/models');
const Op = DB.Sequelize.Op;
const { Resenia } = require('../database/models')

module.exports = {
    index: function(req, res) { // all users
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

    findUsers: function (req, res) {  // user search
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
                return res.render('users/index', {
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

    userDetailByUsername: function(req, res) { // user profile and reviews
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

    myProfile: function(req, res, resultados) { // own profile and reviews 
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