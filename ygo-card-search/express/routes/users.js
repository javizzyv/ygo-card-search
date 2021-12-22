const router = require('express').Router();
const User = require('../models/User');

router.get('/', async (req, res) => {
  const Users = await User.find();
  res.send(Users);
});

module.exports = router;
