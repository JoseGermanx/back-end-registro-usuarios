const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const router = require("../routes/user.routes.js");
const store = require('../database/session_conexion.js');


const app = express();

app.use(cors({
    origin: "http://localhost:5174",
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


app.use("/api/v1", (req, res, next) => {
req.session.visits = req.session.visits ? req.session.visits + 1 : 1;
next()
}, router);

app.use("*", (req, res) => { res.status(404).send("Ruta no encontrada")});

module.exports = app;