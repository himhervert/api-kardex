var express = require('express');
var jwt = require('jsonwebtoken');
var puerto = process.env.PORT || 3000;

var app = express();

app.use(express.json());// Middleware para recibir ratos con formato JSON

app.get('/calificaciones', function (req, res) {
    console.log('Token recibido: ' + req.query.token);
    jwt.verify(req.query.token, 'clavesupersecreta',
        function (error, token) {
            if (error) {
                res.status(403).json({ mensaje: 'Autorización no valida' });
            }
            else {
                res.json({
                    mensaje: 'Bienvenido ' + token.usuario +' Aqui estan las calificaciones...'
                });
            }
        });
});
app.post('/login', function (req, res) {
    // Simular la base de datos
    var alumno = {
        email: 'alumno@uaslp.mx',
        password: '1234'
    };

    var profesor = {
        email: 'profesor@uaslp.mx',
        password: 'abc'
    }
    if (req.body.email == alumno.email &&
        req.body.password == alumno.password) {
        var token = jwt.sign({
            usuario: 'alumno',
            nombre: 'Leito',
            claveUnica: 123456
        }, 'clavesupersecreta', { expiresIn: '1h' });//////// NUNCA MANDAR PASSWORD EN EL TOKEN
        console.log('Token generado: ' + token);
        res.json({
            mensaje: 'Bienvenido alumno',
            elToken: token
        });
    }
    else {
        if (req.body.email == profesor.email &&
            req.body.password == profesor.password) {
            var token = jwt.sign({
                usuario: 'julio',
                nombre: 'profe',
                claveUnica: 123456
            }, 'clavesupersecreta', { expiresIn: '1h' });//////// NUNCA MANDAR PASSWORD EN EL TOKEN
            console.log('Token generado: ' + token);
            res.json({
                mensaje: 'Bienvenido profesor',
                elToken: token
            });
        }
        else {
            res.status(401);
            res.json({
                mensaje: 'Credenciales no válidas',
                elToken: null
            });
        }
    }
});

app.listen(puerto, function () {
    console.log('Servidor corriendo en el puerto: ' + puerto);
});