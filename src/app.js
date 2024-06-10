const express = require('express')
const routes = require('./routes/index')
const cors = require('cors')
const { handleRequestLogs } = require('./middlewares/logs.middleware')
const app = express()

//midlewares
app.use(express.json())
app.use(cors())

//routes
app.use('/', handleRequestLogs, routes)

module.exports = app