const mongoose = require('mongoose'),
    offerModel = require('./offer'),
    orderModel = require('./order'),
    questionModel = require('./question')

const models = {
    Offer: mongoose.model('Offer'),
    Question: mongoose.model('Question'),
    Order: mongoose.model('Order')
}

module.exports = models;