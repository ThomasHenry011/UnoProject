const gameService = require('../services/gameService');

const createGame = async (req, res) => {
  const game = await gameService.createGame(req.body);
  res.status(201).json(game);
};

const getGameById = async (req, res) => {
  const game = await gameService.getGameById(req.params.id);
  if (game) {
    res.json(game);
  } else {
    res.status(404).json({ message: 'game not found' });
  }
};

const updateGame = async (req, res) => {
  const game = await gameService.updateGame(req.params.id, req.body);
  if (game) {
    res.json(game);
  } else {
    res.status(404).json({ message: 'game not found' });
  }
};

const deleteGame = async (req, res) => {
  const success = await gameService.deleteGame(req.params.id);
  if (success) {
    res.status(204).send();
  } else {
    res.status(404).json({ message: 'game not found' });
  }
};

module.exports = {
  createGame,
  getGameById,
  updateGame,
  deleteGame
};