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

router.delete('/:id/delete', async (req, res) => {
  const id = mongoose.Types.ObjectId(req.params.id);

  Card.findByIdAndDelete(id)
    .then((card) => {
      if (!card) {
        return res.status(404).send();
      }
      res.send(card);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

module.exports = router;
