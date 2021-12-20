const router = require('express').Router();
const User = require('../models/User');
const Joi = require('@hapi/joi');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Login
const schemaLogin = Joi.object({
  email: Joi.string().min(6).max(255).required().email(),
  password: Joi.string().min(6).max(1024).required()
});

router.post('/login', async (req, res) => {
  // Validations
  const { error } = schemaLogin.validate(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });

  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).json({ error: true, message: 'User not exists' });

  const validPass = await bcrypt.compare(req.body.password, user.password);
  if (!validPass) return res.status(400).json({ error: true, message: 'Password not valid' });

  const token = jwt.sign(
    {
      name: user.name,
      id: user._id
    },
    'lasljaAaakjljKL92387'
  );

  res.header('auth-token', token).json({
    error: null,
    data: { token }
  });
});

// Register
const schemaRegister = Joi.object({
  name: Joi.string().min(6).max(255).required(),
  email: Joi.string().min(6).max(255).required().email(),
  password: Joi.string().min(6).max(1024).required()
});

router.post('/register', async (req, res) => {
  // Validations
  const { error } = schemaRegister.validate(req.body);

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  const emailAlreadyExists = await User.findOne({ email: req.body.email });

  if (emailAlreadyExists) return res.status(400).json({ error: true, message: 'Email already exists' });

  const salt = await bcrypt.genSalt(10);
  const password = await bcrypt.hash(req.body.password, salt);

  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password
  });

  try {
    const savedUser = await user.save();
    res.json({
      error: null,
      data: savedUser
    });
  } catch (error) {
    res.status(400).json(error);
  }
});

module.exports = router;
