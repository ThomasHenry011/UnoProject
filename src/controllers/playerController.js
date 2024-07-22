const playerService = require('../services/playerService');

const createPlayer = async (req, res) => {
  const player = await playerService.createPlayer(req.body);
  res.status(201).json(player);
};

const getPlayerById = async (req, res) => {
  const player = await playerService.getPlayerById(req.params.id);
  if (player) {
    res.json(player);
  } else {
    res.status(404).json({ message: 'Player not found' });
  }
};

const updatePlayer = async (req, res) => {
  const player = await playerService.updatePlayer(req.params.id, req.body);
  if (player) {
    res.json(player);
  } else {
    res.status(404).json({ message: 'Player not found' });
  }
};

const deletePlayer = async (req, res) => {
  const success = await playerService.deletePlayer(req.params.id);
  if (success) {
    res.status(204).send();
  } else {
    res.status(404).json({ message: 'Player not found' });
  }
};

module.exports = {
  createPlayer,
  getPlayerById,
  updatePlayer,
  deletePlayer
};
