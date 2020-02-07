const express = require('express');
const app = express();
const massive = require('massive');
require('dotenv').config();

const { CONNECTION_STRING, SERVER_PORT } = process.env;

app.use(express.json());

const {} = require('./controller');

massive(CONNECTION_STRING).then(db => {
  app.set('db', db);
  console.log('DB is connected successfully!');
});

//end points

app.get('/api/inventory', getProduct);
// app.post('/products', addProducts);
// app.put('/products/:product_id', updateProducts);

app.listen(SERVER_PORT, () => {
  console.log(`Server is listening on port ${SERVER_PORT}`);
});
