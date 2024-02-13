const app = require("./src/app/app.js")
const { dbConnection } = require("./src/database/conexion.js")

const port = 3000;


app.listen(port, () => {
  console.log(`Aplicacion corriendo en --->>>> http://localhost:${port}`);
});

dbConnection();
//commonjs
//exportar
// modules.exports = app;
//importar
// const app = require("./src/app/app.js")


// ES6
// export default app;
// import app from "./src/app/app.js";