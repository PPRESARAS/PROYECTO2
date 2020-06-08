let DB = require('../database/models');
let Op = DB.Sequelize.Op;

module.exports = {
    Usuarios:(req, res) => { // todos los usuarios
        res.render('Usuario')
    },

    resultadoUsuarios: (req, res) => {
        var busqueda = req.query.NombreDeUsuario
        DB.Usuario.findAll({
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
}