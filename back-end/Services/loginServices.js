const model = require('../Models/User');

const getConnection = require('../Models/get-connection');

const validateEmail = (email) => {
  const regexEmail = /\S+@\S+\.\S+/;
  return regexEmail.test(String(email).toLowerCase());
};

const verifyUser = async (email, password) => {
  
  if (!email || !password) {
    return {
      error: true,
      code: 'invalid_data',
      message: 'All fields must be filled.',
      statusCode: 401,
    }
  }
  
  if (!validateEmail) {
    return {
      error: true,
      code: 'invalid_data',
      message: 'Invalid entries. Try again.',
      statusCode: 400,
    }
  }
  
  const emailExists = await model.getByEmail({ email });
  // console.log('emailExists==>', emailExists);
  if (!emailExists) {
    return {
      error: true,
      code: 'Not Found',
      message: 'Incorrect username or password',
      statusCode: 404,
    }
  }
  // return verifyUser;
  // return getConnection('users').then(db => db.insertOne({ email, password }));
  // return console.log({ message: 'Usuário acessou' });
  return model.getByUser(email);
};

module.exports = {
  verifyUser,
};
