const mongoose = require('mongoose')

const Schema = mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: true
    }
})

mongoose.model('Question', Schema)