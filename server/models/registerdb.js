const mongoose = require("mongoose");

const RegisterSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    school: {
        type: String,
        required: true
    },
    nicky: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

const RegisterModel = mongoose.model('userinfos', RegisterSchema)

module.exports = RegisterModel