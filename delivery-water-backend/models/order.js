const mongoose = require('mongoose')

const Schema = mongoose.Schema({
    firstName: {
        type: String,
    },
    middleName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    email: {
        type: String,
    },
    phone: {
        type: String,
    },
    features: {
        type: Array
    },
    goods: {
        type: Array
    }
})

mongoose.model('Order', Schema)