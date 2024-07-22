const express = require('express');
const gameController = require('../controllers/gameController');

const router = express.Router();

router.post('/api/game', gameController.createGame);
router.get('/api/game/:id', gameController.getGameById);
router.put('/api/game/:id', gameController.updateGame);
router.delete('/api/game/:id', gameController.deleteGame);

module.exports = router;
