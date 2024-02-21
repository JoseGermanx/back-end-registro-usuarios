const User = require("../models/user.model.js");
const bcrypt = require('bcrypt');

const crearUsuario = async (req, res) => {

    const { name, lastName, email, password } = req.body;

    //agregar un paso para poder encriptar la contraseña
    const salt = bcrypt.genSaltSync();
    const passwordEncripted = bcrypt.hashSync(password, salt)

    await User.create({
    name: name,
    lastName: lastName,
    email: email,
    password: passwordEncripted
  });

  res.status(201).json({
    msg: "Usuario creado con éxito",
    code: 201
  })
};

module.exports = crearUsuario;
