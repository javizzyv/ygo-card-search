const router = require('express').Router();
const Card = require('../models/Card');
const Joi = require('@hapi/joi');

const schemaNewCard = Joi.object({
  name: Joi.string().min(4).max(25).required(),
  type: Joi.string().min(3).max(10).required(),
  desc: Joi.string().min(6).max(255).required()
});

router.post('/newCard', async (req, res) => {
  const { error } = schemaNewCard.validate(req.body);

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  const nameAlreadyExists = await Card.findOne({ email: req.body.name });

  if (nameAlreadyExists) return res.status(400).json({ error: true, message: 'Name already exists' });

  const card = new Card({
    name: req.body.name,
    type: req.body.type,
    desc: req.body.desc
  });

  try {
    const savedCard = await card.save();
    res.json({
      error: null,
      data: savedCard
    });
  } catch (error) {
    res.status(400).json(error);
  }
});

module.exports = router;
