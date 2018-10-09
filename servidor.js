
var express = require('express');
var jwt = require('jsonwebtoken');
var puerto = process.env.PORT || 3000;

var app = express();

app.use(express.json());

app.get('/calificaciones',function(req,res){
    res.json({
        mensaje: 'Bienvenido al APi del kardex'
    });
});
app.post('/login',function(req,res){

    var token = jwt.sign({
        usuario :'alumno',
    },'clavesupersecreta',{expiresIn:'60s'});//////// NUNCA MANDAR PASSWORD EN EL TOKEN
    console.log('Token generado: '+ token);
    res.json({
        elToken: token
    });
});

app.listen(puerto,function(){
    console.log('Servidor corriendo en el puerto: ' + puerto);
});