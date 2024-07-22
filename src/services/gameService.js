const { Game } = require('../models');

const createGame = async (data) => {
  return await Game.create(data);
};

const getGameById = async (id) => {
  return await Game.findByPk(id);
};

const updateGame = async (id, data) => {
  const game = await Game.findByPk(id);
  if (game) {
    return await game.update(data);
  }
  return null;
};

const deleteGame = async (id) => {
  const game = await game.findByPk(id);
  if (game) {
    await game.destroy();
    return true;
  }
  return false;
};

module.exports = {
  createGame,
  getGameById,
  updateGame,
  deleteGame
};
