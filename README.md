# api-kardex
Ejemplo de un API REST para el kardex de calificaciones.

## Autentificación y Autorización

### JSON Web Token

Cadena formada por:

1) Encabezado
    1) Tipo de Token
    2) Algoritmo de Codificación
2) Payload
    1) Datos
3) Firma de Verificación

### Node

    npm install jsonwebtoken
    var jwt = require('jsonwebtoken');
    jwt.sign(payload,clave,options);

    |Cliente|   ----/login--->  |API|
                <---token-----  Genera token
                                (Verificar)

REST Significa que no hay representacion real del cliente, 
cada peticion se genera en el servidor.
