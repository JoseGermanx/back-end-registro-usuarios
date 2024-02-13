const mongoose = require("mongoose");

const dbConnection = async () => {
  // intenta algo
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/api-usuarios");
    console.log("Base de datos conectada");

    // y si hay un error, capturalo
  } catch (error) {
    console.log(error);
  }
};

module.exports = { dbConnection };
