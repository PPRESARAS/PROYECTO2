let DB = require('../database/models');
let Op = DB.Sequelize.Op;

module.exports = {
    Usuarios:(req, res) => { // todos los usuarios
        res.render('Usuarios')
    },

    resultadoUsuarios: (req, res) => {
        var busqueda = req.query.NombreDeUsuario
        DB.Usuarios.findAll({
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