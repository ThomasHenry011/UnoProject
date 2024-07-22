const scoreService = require('../services/scoreService');

const createScore = async (req, res) => {
  const score = await scoreService.createScore(req.body);
  res.status(201).json(score);
};

const getScoreById = async (req, res) => {
  const score = await scoreService.getScoreById(req.params.id);
  if (score) {
    res.json(score);
  } else {
    res.status(404).json({ message: 'score not found' });
  }
};

const updateScore = async (req, res) => {
  const score = await scoreService.updateScore(req.params.id, req.body);
  if (score) {
    res.json(score);
  } else {
    res.status(404).json({ message: 'score not found' });
  }
};

const deleteScore = async (req, res) => {
  const success = await scoreService.deleteScore(req.params.id);
  if (success) {
    res.status(204).send();
  } else {
    res.status(404).json({ message: 'score not found' });
  }
};

module.exports = {
  createScore,
  getScoreById,
  updateScore,
  deleteScore
};