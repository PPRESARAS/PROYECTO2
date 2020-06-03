let DB = require('../database/models');
let Op = DB.Sequelize.Op;
let usuarioController = require('../controllers/usuarioController')

var bcrypt = require('bcryptjs');
var salt = bcrypt.genSaltSync(10); //para que se guarde en la DB haseada
var hash = bcrypt.hashSync("B4c0/\/", salt);

module.exports = {
    index: function(req, res) { 
        return res.render('registracion', {
            errores : {
                NombreDeUsuario_error : false,
                EmailDeUsuario_error : false,
            },
            NombreDeUsuario : false,
            EmailDeUsuario : false,
            FechaDeNacimiento : false,
         });
    },

    checkIfExists: function(req, res) { // check if username or email already exists
        DB
            .Usuario
            .findOne(
                {
                    where: {
                        [Op.or]: [
                            {
                                NombreDeUsuario: { [Op.eq] : req.body.NombreDeUsuario }
                            },
                            {
                                EmailDeUsuario: { [Op.eq] : req.body.EmailDeUsuario }
                            }
                        ]
                    },
                }
            )
            .then (function (resultados) {
                if (!resultados) {
                    return module.exports.registracion(req, res);
                }
                if (resultados.NombreDeUsuario == req.body.NombreDeUsuario && resultados.EmailDeUsuario == req.body.EmailDeUsuario) {
                    return res.render('registracion', { 
                        errores : {
                            NombreDeUsuario_error : "Este nombre de Usuario ya esta en uso",
                            EmailDeUsuario_error : "Este E-Mail ya esta en uso",
                        },
                        NombreDeUsuario : req.body.NombreDeUsuario,
                        EmailDeUsuario : req.body.EmailDeUsuario,
                        FechaDeNacimiento : req.body.FechaDeNacimiento,
                        resultados : resultados,
                    })
                }
                if (resultados.NombreDeUsuario == req.body.NombreDeUsuario) {
                    return res.render('registracion', { 
                        errores : {
                            NombreDeUsuario_error : "Este nombre de Usuario ya esta en uso",
                            EmailDeUsuario_error : false,
                        },
                        NombreDeUsuario : req.body.NombreDeUsuario,
                        EmailDeUsuario : req.body.EmailDeUsuario,
                        FechaDeNacimiento : req.body.FechaDeNacimiento,
                        resultados : resultados,
                    })
                }
                if (resultados.EmailDeUsuario == req.body.EmailDeUsuario) {
                    return res.render('registracion', {
                        errores : {
                            NombreDeUsuario_error: false,
                            EmailDeUsuario_error : "Este E-Mail ya esta en uso",
                        },
                        NombreDeUsuario : req.body.NombreDeUsuario,
                        EmailDeUsuario : req.body.EmailDeUsuario,
                        FechaDeNacimiento : req.body.FechaDeNacimiento,
                        resultados : resultados,
                    })
                }
            })
            .catch (function (error) {
                console.log(error)
                return res.render('registracion', {
                    errors : {
                        NombreDeUsuario_error: false,
                        EmailDeUsuario_error : "Unexpected error",
                    },
                    NombreDeUsuario : req.body.NombreDeUsuario,
                    EmailDeUsuario : req.body.EmailDeUsuario,
                });
            })
    },

    register: function(req, res) { // create in DB
        req.body.FechaDeNacimiento == '' ? req.body.FechaDeNacimiento = '2000-01-01' : req.body.FechaDeNacimiento = req.body.FechaDeNacimiento;
        req.body.ContraseniaDeUsuario = bcrypt.hashSync(req.body.ContraseniaDeUsuario, 80)
        DB
            .Usuario
            .create(req.body)
            .then (function (resultados) {
                return usuarioController.miPerfil(req, res, resultados);
            })
            .catch (error => {
                return res.send(error)
            })
    },
}