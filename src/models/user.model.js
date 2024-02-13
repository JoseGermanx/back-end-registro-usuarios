
const mongoose = require("mongoose");

// schema
const { Schema } = mongoose; 

const userSchema = new Schema({
    name: String,
    lastName: String,
    email: String,
    password: String,
})

// modelo
const User = mongoose.model("User", userSchema);

module.exports = User;