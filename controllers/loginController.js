/* Pido el modulo */
let moduloLogin =require('../modulo-login');



logUser: function(req, res) {
    res.render('login');
},

/* Confirma el Login*/
confirmUser: function (req, res){
    moduloLogin.validar(req.body.email, req.body.password)
    .then(resultado=>{
        if(resultado== undefined){
            res.redirect('/users/reviews'); /* lo mando al login devuelta */
        }
        else{
            res.redirect('/users/reviews/' + resultado.id)
        }
    })
},

/* va a el perfil y le muestra las resenias, al usuario */
getReviews: function (req, res) {
debug.Resena.findAll({
    where: [
        {usuario_id: req.params.id}
    ],
    include: [ "usuario" ]
})
.then(resultado=>{
    res.render('reviews', {resultado:resultado})
})

},




module.exports = usersController;