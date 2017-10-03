const express = require('express');
const app = express();

const users = require('users');

app.use('/users', users);

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});
