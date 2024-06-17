
const User = require("../models/user.model.js");
const bcrypt = require('bcrypt');
const generarJWT = require('../services/generar-jwt.js');


const login = async (req, res) => {

    const { email, password } = req.body;

    if(!email || !password) {
        return res.status(400).json({
            code: 400,
            msg: "Email y password son requeridos"
        })
    }
    try {
   // verificar que el usuario exista en la base de datos
   const user = await User.findOne({email: email})

   if(!user) {
    return res.status(400).json({
        code: 400,
        msg: "Usuario no registrado en nuestro sistema"
    })
   }

   //verificar que la contraseña sea correcta

   //agregar un paso para poder verificar la contraseña encriptada

   const passwordVerified = bcrypt.compareSync(password, user.password)


   if(!passwordVerified) {
    return res.status(400).json({
        code: 400,
        msg: "Contraseña incorrecta"
    })
   }

   const token = await generarJWT(user._id);

   res.status(200)
   .cookie('token', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    maxAge: 1000 * 60 * 60 * 24 * 7 // 7 dias,
   })
   .json({
       code: 200,
       msg: "Usuario logueado con éxito",
   })

    }
    catch (error) {
        console.log(error);
    }

  

   

}


module.exports = login;