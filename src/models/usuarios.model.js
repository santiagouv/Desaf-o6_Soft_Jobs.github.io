const database = require('../database/config')
const bcrypt = require('bcryptjs')

const registrarUsuario = async ({email, password, rol, lenguage}) => {
  const passwordEncriptada = bcrypt.hashSync(password)

  const consulta = "INSERT INTO usuarios VALUES (DEFAULT, $1, $2, $3, $4) RETURNING *"
  const values = [email, passwordEncriptada, rol, lenguage]

  const {rows: usuario} = await database.query(consulta, values)
  return usuario
}

const verificarCredenciales = async ({email, password}) => {
  const consulta = "SELECT * FROM usuarios WHERE email = $1"
  const values = [email]
  
  const {rows: [usuario]} = await database.query(consulta, values)
  const {password: passwordEncriptada} = usuario
  const passwordEsCorrecta = bcrypt.compareSync(password, passwordEncriptada)

  return passwordEsCorrecta
}

const obtenerInfoUsuario = async (email) => {
  const consulta = "SELECT email, rol, lenguage FROM usuarios WHERE email = $1"
  const values = [email]

  const {rows: usuario} = await database.query(consulta, values)

  return usuario
}

const usuariosModel = {
  registrarUsuario,
  verificarCredenciales,
  obtenerInfoUsuario
}

module.exports = usuariosModel