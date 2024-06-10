const usuariosModel = require('../models/usuarios.model')
const jwt = require('jsonwebtoken')
require('dotenv').config()

const nuevoUsuario = async (req, res) => {
  try {
    const usuario = req.body
    const result = await usuariosModel.registrarUsuario(usuario)
  
    res.send(result)
  } catch (error) {
    console.log(error)
    res.send(error.detail)
  }
}

const getUsuario = async (req, res) => {
  try {
    const {email} = req.user
    const usuario = await usuariosModel.obtenerInfoUsuario(email)
    
    res.send(usuario)
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  nuevoUsuario,
  getUsuario
}