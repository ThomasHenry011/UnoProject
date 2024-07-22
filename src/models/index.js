const sequelize = require('../config/database');
const Player = require('./player');
const Game = require('./game');
const Card = require('./card');
const Score = require('./score');

const initModels = () => {
  Player.sync();
  Game.sync();
  Card.sync();
  Score.sync();
};

module.exports = {
  initModels,
  Player,
  Game,
  Card,
  Score
};
