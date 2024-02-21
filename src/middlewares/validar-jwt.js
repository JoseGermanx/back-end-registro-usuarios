
const jwt = require('jsonwebtoken');

const isAuth = (req, res, next) => {
    const access_token = req.headers.token;
    if(!access_token) {
        return res.status(401).json({
            code: 401,
            msg: "No se ha enviado el token de acceso"
        })
    }

    try {
        const decoded = jwt.verify(access_token, "wiojwdfkjsdklfjslkdfjlskdajfsklndviwekndvsoklwei09fkjds");
        req.user = decoded;
    }
    catch (error) {
        console.log(error);
        return res.status(401).json({
            code: 401,
            msg: "Token inválido"
        })
    }



    next();
}

module.exports = isAuth;