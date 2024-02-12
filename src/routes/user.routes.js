
const express = require('express');
const router = express.Router();

const  listarUsuarios  = require("../controllers/user.getAllUser.js");

//listar usuarios
router.get("/", listarUsuarios);

//crear usuario
router.post("/crear-usuario", (req, res) => {
    res.send("Ruta POST gestionada");
});

//login
router.post("/login", (req, res) => {
    res.send("Ruta POST gestionada");
});

//actualizar usuario
router.put("/actualizar-usuario", (req, res) => {
    res.send("Ruta PUT gestionada");
});

//borrar usuario
router.delete("/eliminar-usuario", (req, res) => {
    res.send("Ruta DELETE gestionada");
});

module.exports = router;