const cardService = require('../services/cardService');

const createCard = async (req, res) => {
  const card = await cardService.createCard(req.body);
  res.status(201).json(card);
};

const getCardById = async (req, res) => {
  const card = await cardService.getCardById(req.params.id);
  if (card) {
    res.json(card);
  } else {
    res.status(404).json({ message: 'card not found' });
  }
};

const updateCard = async (req, res) => {
  const card = await cardService.updatecard(req.params.id, req.body);
  if (card) {
    res.json(card);
  } else {
    res.status(404).json({ message: 'card not found' });
  }
};

const deleteCard = async (req, res) => {
  const success = await cardService.deleteCard(req.params.id);
  if (success) {
    res.status(204).send();
  } else {
    res.status(404).json({ message: 'card not found' });
  }
};

module.exports = {
  createCard,
  getCardById,
  updateCard,
  deleteCard
};
