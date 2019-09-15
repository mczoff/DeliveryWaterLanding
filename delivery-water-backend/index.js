require('module-alias/register');

const http = require('http')
const watertmapi = require('./config/app.js')
const server = http.Server(watertmapi)
const port = 3000

server.listen(port, '127.0.0.1', () => console.log(`watertm-api running on ${port}`));