const { Score } = require('../models');

const createScore = async (data) => {
  return await Score.create(data);
};

const getScoreById = async (id) => {
  return await Score.findByPk(id);
};

const updateScore = async (id, data) => {
  const score = await Score.findByPk(id);
  if (score) {
    return await score.update(data);
  }
  return null;
};

const deleteScore = async (id) => {
  const score = await score.findByPk(id);
  if (score) {
    await score.destroy();
    return true;
  }
  return false;
};

module.exports = {
  createScore,
  getScoreById,
  updateScore,
  deleteScore
};
