
const mongoose = require("mongoose");

// schema
const { Schema } = mongoose; 

const userSchema = new Schema({
    name: String,
    lastName: String,
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: String,
    rut: String,
})

// modelo
const User = mongoose.model("User", userSchema);

module.exports = User;