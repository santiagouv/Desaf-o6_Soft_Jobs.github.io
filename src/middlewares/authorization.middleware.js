const jwt = require('jsonwebtoken')

const validarToken = async (req, res, next) => {
  try {

    const Authorization = req.header("Authorization")
    const token = Authorization.split(" ")[1]
    
    jwt.verify(token, process.env.SECRET)
    
    const {email} = jwt.decode(token)
    req.user = {email}

    next()
    
  } catch (error) {

    res.send(error.message)
    
  }

}

module.exports = validarToken
