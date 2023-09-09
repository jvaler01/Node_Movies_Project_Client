const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ message: 'Token de autenticación no proporcionado.' });
  }

  try {
    const decodedToken = jwt.verify(token, 'api_movies');

    req.user = decodedToken;
    next();
    
  } catch (error) {
    res.status(401).json({ message: 'Token de autenticación inválido.' });
  }
};

module.exports = authMiddleware;
