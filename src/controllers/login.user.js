
const User = require("../models/user.model.js");


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
   if(user.password !== password) {
    return res.status(400).json({
        code: 400,
        msg: "Contraseña incorrecta"
    })
   }

   res.status(200).json({
       code: 200,
       msg: "Usuario logueado con éxito",
       data: {
        name: user.name,
        id: user._id
       }
   })

    }
    catch (error) {
        console.log(error);
    }

  

   

}


module.exports = login;