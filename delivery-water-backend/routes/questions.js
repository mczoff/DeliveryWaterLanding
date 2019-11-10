const models = require('../models/index.js')
const api = require('../api/questions')
const config = require('../config/index.js')

module.exports = (app) => {
    app.route('/api/questions')
        .post(api.store(models.Question))

    app.route('/api/questions')
        .get(api.getAll(models.Question))
}