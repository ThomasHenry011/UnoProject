const { Player } = require('../models');

const createPlayer = async (data) => {
  return await Player.create(data);
};

const getPlayerById = async (id) => {
  return await Player.findByPk(id);
};

const updatePlayer = async (id, data) => {
  const player = await Player.findByPk(id);
  if (player) {
    return await player.update(data);
  }
  return null;
};

const deletePlayer = async (id) => {
  const player = await Player.findByPk(id);
  if (player) {
    await player.destroy();
    return true;
  }
  return false;
};

module.exports = {
  createPlayer,
  getPlayerById,
  updatePlayer,
  deletePlayer
};
