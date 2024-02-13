const User = require("../models/user.model.js");

const crearUsuario = async (req, res) => {

    const { name, lastName, email, password } = req.body;
  
    await User.create({
    name: name,
    lastName: lastName,
    email: email,
    password: password,
  });

  res.status(201).json({
    msg: "Usuario creado con éxito",
    code: 201
  })
};

module.exports = crearUsuario;
