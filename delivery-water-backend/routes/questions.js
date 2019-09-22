const models = require('../models/index.js')
const api = require('../api/orders')
const config = require('../config/index.js')

module.exports = (app) => {
    app.route('/api/questions')
        .post(api.store(models.Order))

    app.route('/api/questions')
        .get(api.getAll(models.Order))
}