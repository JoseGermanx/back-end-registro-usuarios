
const express = require('express');
const router = express.Router();

const  listarUsuarios  = require("../controllers/user.getAllUser.js");
const actualizarUsuario = require('../controllers/user.Update.js');
const crearUsuario = require("../controllers/user.createUser.js");
const login = require('../controllers/login.user.js');
const isAuth = require('../middlewares/validar-jwt.js');
const logOut = require('../controllers/user.logOut.js');

//listar usuarios
router.get("/", listarUsuarios);

//crear usuario
router.post("/crear-usuario", crearUsuario);

//login
router.post("/login", login);

//actualizar usuario
router.put("/actualizar-usuario/:id", actualizarUsuario);

//borrar usuario
router.delete("/eliminar-usuario", (req, res) => {
    res.send("Ruta DELETE gestionada");
});

router.get("/ruta-protegida", isAuth, (req, res) => {
    res.send("Ruta protegida");
}
);

router.post("/logout", logOut);


module.exports = router;