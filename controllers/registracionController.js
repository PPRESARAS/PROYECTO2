let db = require ('../database/models');
let op = db.Sequelize.Op;



module.exports={
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


}