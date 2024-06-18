const User = require("../models/user.model.js");
const bcrypt = require('bcrypt');
const response = require("../res/response.js");

const crearUsuario = async (req, res) => {

    const { name, lastName, email, password } = req.body;

    

    //agregar un paso para poder encriptar la contraseña
    const salt = bcrypt.genSaltSync();
    const passwordEncripted = bcrypt.hashSync(password, salt)

    const user = await User.create({
    name: name,
    lastName: lastName,
    email: email,
    password: passwordEncripted
  });

  response(res, 201, user._id, "Usuario creado con éxito")

};

module.exports = crearUsuario;
