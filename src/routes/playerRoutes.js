const express = require('express');
const playerController = require('../controllers/playerController');

const router = express.Router();

router.post('/api/players', playerController.createPlayer);
router.get('/api/players/:id', playerController.getPlayerById);
router.put('/api/players/:id', playerController.updatePlayer);
router.delete('/api/players/:id', playerController.deletePlayer);

module.exports = router;
