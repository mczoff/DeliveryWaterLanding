const models = require('../models/index.js')
const api = require('../api/orders')
const config = require('../config/index.js')

module.exports = (app) => {
    app.route('/api/orders')
        .get(api.getAll(models.Order))
}