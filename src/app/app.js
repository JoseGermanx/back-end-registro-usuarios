const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const router = require("../routes/user.routes.js");


const app = express();

app.use(cors({
    origin: "http://localhost:5174",
    credentials: true
}));
app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({extended: true}));


app.use("/api/v1", router);

app.use("*", (req, res) => { res.status(404).send("Ruta no encontrada")});

module.exports = app;