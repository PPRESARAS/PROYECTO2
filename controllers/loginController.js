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
            res.redirect('/users/reviews')
        }
        else{
            console.log(resultado.id);
            res.redirect('/users/reviews/'+resultado.id)
        }
    })
},
