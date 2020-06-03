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
<<<<<<< HEAD
<<<<<<< 6cbe63bf59ee165781078d7a714728a9de7b2024
    moduloLogin.validar(req.body.email, req.body.password)
    .then(resultado=>{
        if(resultado== undefined){
            res.redirect('/users/reviews')
        }
        else{
            console.log(resultado.id);
            res.redirect('/users/reviews/'+resultado.id)
=======
=======
>>>>>>> master
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
<<<<<<< HEAD
>>>>>>> correcciones
=======
>>>>>>> master
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
