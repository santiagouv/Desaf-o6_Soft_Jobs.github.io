const usuariosRouter = require('express').Router()
const {nuevoUsuario, getUsuario} = require('../../controllers/usuarios.controller')
const validarToken = require('../../middlewares/authorization.middleware')

usuariosRouter.post('/', nuevoUsuario)
usuariosRouter.get('/', validarToken, getUsuario)

module.exports = usuariosRouter