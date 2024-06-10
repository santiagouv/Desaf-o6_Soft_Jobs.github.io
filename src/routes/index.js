const router = require('express').Router()
const loginRoutes = require('./usuarios/login.router')
const usuariosRoutes = require('./usuarios/usuarios.router')

router.use('/login', loginRoutes)
router.use('/usuarios', usuariosRoutes)

module.exports = router