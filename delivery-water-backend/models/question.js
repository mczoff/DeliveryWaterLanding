const mongoose = require('mongoose')

const Schema = mongoose.Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
    },
    phone: {
        type: String,
    },
    text: {
        type: String,
    }
})

mongoose.model('Question', Schema)