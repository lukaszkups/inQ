const express = require('express');
const router = express.Router();

const {user} = require('../models');
const {asyncMiddleware} = require('helpers');

router.get('/', asyncMiddleware( async(req, res) => {
  // if there is an error thrown in user.findAll()s, asyncMiddleware will pass it to next() and express will handle the error;
  const users = await user.findAll();
  res.json(users);
}));

module.exports = router;
