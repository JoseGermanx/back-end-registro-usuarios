const User = require("../models/user.model.js");

const getUser = async (req, res) => { 

    const { user } = req;

    try {
        const userDB = await User.findById(user.idUser);

        res.status(200).json({
            code: 200,
            data:{
                name: userDB.name,
                lastName: userDB.lastName,
                email: userDB.email
            }
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            code: 500,
            msg: "Error en el servidor"
        })
    }

}

module.exports = getUser;
