
const express = require('express');
const router = express.Router();

const  listarUsuarios  = require("../controllers/user.getAllUser.js");
const actualizarUsuario = require('../controllers/user.Update.js');
const crearUsuario = require("../controllers/user.createUser.js")

//listar usuarios
router.get("/", listarUsuarios);

//crear usuario
router.post("/crear-usuario", crearUsuario);

//login
router.post("/login", (req, res) => {
    res.send("Ruta POST gestionada");
});

//actualizar usuario
router.put("/actualizar-usuario/:id", actualizarUsuario);

//borrar usuario
router.delete("/eliminar-usuario", (req, res) => {
    res.send("Ruta DELETE gestionada");
});

module.exports = router;