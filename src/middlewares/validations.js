

// express validator


const { check, validationResult } = require('express-validator');

const validarCampos = (req, res, next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({
            code: 400,
            msg: errors.array()
        })
    }
    next();
}

const validarRegistro = [
    check('email', 'El email es obligatorio').isEmail().not().isEmpty(),
    check('password', 'La contraseña es obligatoria').not().isEmpty(),
    validarCampos
]

const validarLogin = [
    check('email', 'El email es obligatorio').isEmail().not().isEmpty(),
    check('password', 'La contraseña es obligatoria').not().isEmpty(),
    validarCampos
]
const validarGoogle = [
    check('token_gg', 'El id_token es obligatorio').not().isEmpty(),
    validarCampos
]
module.exports = {
    validarRegistro,
    validarLogin,
    validarGoogle,
    validarCampos
}