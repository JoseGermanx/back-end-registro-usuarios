
const jwt = require('jsonwebtoken');

const generarJWT = (idUser = "", name = "", lastName = "", email = "") => {
 
    return new Promise((resolve, reject) => {
        const payload = {idUser, name, lastName, email};
        jwt.sign(
            payload,
            process.env.SECRET_KEY_STRING,
            {
                expiresIn: "4h"
            },
            (err, token) => {
                if (err) {
                  console.log(err);
                  reject("No se pudo generar el token");
                } else {
                  resolve(token);
                }
            }
        )
    })
}





module.exports = generarJWT;