const loginRouter = require('express').Router()
const validarCredenciales = require('../../middlewares/login.middleware')
const {iniciarSesion} = require('../../controllers/login.controller')

loginRouter.post('/', validarCredenciales, iniciarSesion)

module.exports = loginRouter