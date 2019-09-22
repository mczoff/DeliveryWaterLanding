const mongoose = require('mongoose')

const Schema = mongoose.Schema({
    tag: {
        type: String,
    },
    countImages: {
        type: Number,
    },
    capabilities: {
        type: Array,
    },
    price: {
        type: Number,
    }
})

mongoose.model('Offer', Schema)