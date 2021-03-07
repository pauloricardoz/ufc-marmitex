const getCollection = require('./get-connection');

const getByEmail = async ({ email }) =>
  getCollection('users').then((emai) => emai.findOne({ email }));

const getByUser = async (email) => 
  getCollection('users').then((user) => user.findOne({ email }));
  

const getAll = async () => getCollection('users').then((user) => user.find().toArray());

module.exports = {
  getByEmail,
  getByUser,
  getAll,
};
