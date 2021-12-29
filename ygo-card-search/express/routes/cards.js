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

router.delete('/delete/:id', async (req, res) => {
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

router.put('/update/:id', async (req, res) => {
  const id = mongoose.Types.ObjectId(req.params.id);
  const card = await Card.findById(id);
  let name,
    desc,
    type = '';

  if (req.body.name) {
    name = req.body.name;
  } else {
    name = card.name;
  }

  if (req.body.desc) {
    desc = req.body.desc;
  } else {
    desc = card.desc;
  }

  if (req.body.type) {
    type = req.body.type;
  } else {
    type = card.type;
  }

  Card.findByIdAndUpdate({ _id: id }, { name: name, type: type, desc: desc }, function (err, result) {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});

module.exports = router;
