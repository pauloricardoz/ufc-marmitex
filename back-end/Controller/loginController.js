const jwt = require('jsonwebtoken');

const { Router } = require('express');

const services = require('../Services/loginServices');

const model = require('../Models/User');

const login = Router();

const secret = process.env.SECRET;

const jwtConfig = {
  expiresIn: '15d',
  algorithm: 'HS256',
};

login.post('/', async (req, res) => {
  try {
    const { email, password } = req.body;
    const findUser = await services.verifyUser(email, password);

    if (findUser.error) {
      return res.status(findUser.statusCode).json({ message: findUser.message });
    }

    const payload = {
      iss: 'post_api',
      aud: 'identify',
    };
    const token = jwt.sign(payload, secret, jwtConfig);
    return res.status(200).json({ token });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Algo deu errado no servidor' });
  }
});

login.get('/', async (req, res) => {
  const getAll = await model.getAll();
  return res.status(200).json(getAll);
});

module.exports = login;
