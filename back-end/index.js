const express = require('express');

const bodyParser = require('body-parser');

const loginController = require('./Controller/loginController');

const app = express();

const PORT = 3000;

app.use(bodyParser.json());

app.use('/login', loginController);

app.listen(PORT, () => {
  console.log(`O UFC Marmitex está ON na porta ${PORT}`);
});

