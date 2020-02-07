require('dotenv').config();
const express = require('express');
const app = express();
const massive = require('massive');

const {} = require('./controller');
app.use(express.json());

const PORT = 5050;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
