const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const router = require("../routes/user.routes.js");
const store = require('../database/session_conexion.js');
const sessionData = require('../middlewares/session.js');


const app = express();

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));
app.use(require('express-session')({
    secret: 'This is a secret',
    key: 'user_session',
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7, // 1 week
    },
    store: store,
    resave: true,
    saveUninitialized: true
  }));
app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({extended: true}));


app.use("/api/v1", sessionData, router);

app.use("*", (req, res) => { res.status(404).send("Ruta no encontrada")});

module.exports = app;