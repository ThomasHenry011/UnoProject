const { Card } = require('../models');

const createCard = async (data) => {
  return await Card.create(data);
};

const getCardById = async (id) => {
  return await Card.findByPk(id);
};

const updateCard = async (id, data) => {
  const card = await Card.findByPk(id);
  if (card) {
    return await card.update(data);
  }
  return null;
};

const deleteCard = async (id) => {
  const card = await card.findByPk(id);
  if (card) {
    await card.destroy();
    return true;
  }
  return false;
};

module.exports = {
  createCard,
  getCardById,
  updateCard,
  deleteCard
};
