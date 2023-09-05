const jwt = require('jsonwebtoken');
const { JWT_SECRET_KEY } = require('../utility/config');

 const jwtVerify = async (req, res, next) => {
     try {
         const authHeader = req.headers["authorization"];
        

        if (authHeader == null) {
          return res.status(401).json({ statusCode:404, message:'Token is required' })
         }
         const token = authHeader.split(' ')[1]; 
     const decode = jwt.verify(token, JWT_SECRET_KEY)
     req.user = decode
     next()
    } catch (error) {
        console.log(error)
    }
 }

 module.exports = jwtVerify