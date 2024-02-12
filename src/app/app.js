const express = require('express');
const morgan = require('morgan');
const router = require("../routes/user.routes.js");


const app = express();

app.use(morgan('dev'));
app.use("/api/v1", router);



module.exports = app;