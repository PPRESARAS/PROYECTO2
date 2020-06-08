let db = require('../database/models');
let Op = db.Sequelize.Op;

module.exports = {
    Usuarios:(req, res) => { // todos los usuarios
        res.render('usuarios/miPerfil')
    },

    resultadoUsuarios: (req, res) => {
        var busqueda = req.query.NombreDeUsuario
        db.Usuario.findAll({
            where:{
                [Op.or]:[{NombreDeUsuario: {[Op.like]:"%" + busqueda + "%"}},
                         {EmailDeUsuario: {[Op.like]: "%" + busqueda + "%"}}   
                        ]}
            }
        )
        .then (function(resultado){
            console.log(resultado)
            if (resultado.length > 0 ){
                res.render("buscar", {buscar:buscar})
            }
            else{
                res.redirect('/usuarios/index')
            }
        })
    },

    detalleDeUsuarioPorNombre: (req, res) =>{
        db.Usuario.findAll({
            where: {
                NombreDeUsuario: req.body.NombreDeUsuario,
            }
        })
        .then(function(resultados) {
            res.render('usuarios/miPerfil', {
                IdUsuarios: resultados.IdUsuarios,
                NombreDeUsuario: resultados.NombreDeUsuario,
                EmailDeUsuario: resultados.EmailDeUsuario,
                FechaDeNacimiento: resultados.FechaDeNacimiento,
                Resenia: resultados.Resenia,
            });
        })
    },

    miPerfil: (req, res) =>{
        db.Usuario.findOne({
            where: {
                EmailDeUsuario: req.params.EmailDeUsuario,
            }
        })
        .then(function(resultados) {
            res.render('usuarios/miPerfil', {
                IdUsuarios: resultados.IdUsuarios,
                NombreDeUsuario: resultados.NombreDeUsuario,
                EmailDeUsuario: resultados.EmailDeUsuario,
                FechaDeNacimiento: resultados.FechaDeNacimiento,
                Resenia: resultados.Resenia,
            });
        })
    }
}