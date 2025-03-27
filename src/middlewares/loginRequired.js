import jwt from 'jsonwebtoken';

export default (req, res, next) => {
  const { autorization } = req.headers;

  if (!autorization) {
    return res.status(401).json({
      erros: ['Login required'],
    });
  }

  const [, token] = autorization.split(' ');

  try {
    const dados = jwt.verify(token, process.env.TOKEN_SECRET);
    const { id, email } = dados;
    req.userId = id;
    req.userEmail = email;
    return next();
  } catch (e) {
    return res.status(401).json({
      erros: ['Token expirado ou inválido.'],

    });
  }
};
