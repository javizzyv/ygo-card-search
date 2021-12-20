const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
  const token = req.header('auth-token');

  if (!token) return res.status(401).json({ error: 'Access not granted' });
  try {
    const verificate = jwt.verify(token, 'lasljaAaakjljKL92387');
    req.user = verificate;
    next();
  } catch (error) {
    res.status(400).json({ error: 'token not valid' });
  }
};

module.exports = verifyToken;
