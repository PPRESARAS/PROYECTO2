/* Pido el modulo */
let moduloLogin =require('../modulo-login');



module.exports = {
logUser: function(req, res) {
   return res.render('login', {
        errors: false,
        email: false,
   });
},

/* Confirma el Login*/
confirmUser: function (req, res){
    moduloLogin.validar(req.body.EmailDeUsuario, req.body.ConstraseniaDeUsuario)
    .then(function (resultado) {
        if (resultado != null) {
            if (bcrypt.compareSync(req.body.ConstraseniaDeUsuario, results.ConstraseniaDeUsuario)) {
                return usuarioController.myProfile(req, res, resultado)
            } else {
                return res.render('login', {
                    errors : "Contraseña Incorrecta",
                    email : req.body.EmailDeUsuario,
                });
            }
        } else {
            next(); // se va al catch
        }
    })
        .catch (function (error) {
            return res.render('login', {
                errors : "Usuario Inexistente",
                email : req.body.EmailDeUsuario,
            });
        })
    },
    
}
