
const logOut = async (req, res) => {
    res.clearCookie("token")
    .status(200)
    .json({
        msg: "Sesión cerrada con éxito",
        code: 200
    });

    }

module.exports = logOut;