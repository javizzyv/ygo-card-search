const router = require('express').Router();
const mongoose = require('mongoose');
const Card = require('../models/Card');

router.get('/', async (req, res) => {
  const Cards = await Card.find();
  res.send(Cards);
});

router.get('/:id', async (req, res) => {
  const id = mongoose.Types.ObjectId(req.params.id);

  const Cards = await Card.findById(id);
  res.send(Cards);
});

module.exports = router;
