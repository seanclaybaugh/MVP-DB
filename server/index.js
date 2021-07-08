const express = require('express');
const app = express();
const port = 3000;
const model = require('../db/models/index.js')
app.use(express.json());


app.get('/', model.getNames);
app.post('/user', model.createUser);
app.post('/name', model.likeName);




app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})