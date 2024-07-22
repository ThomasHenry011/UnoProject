const express = require('express');
const scoreController = require('../controllers/scoreController');

const router = express.Router();

router.post('/api/score', scoreController.createScore);
router.get('/api/score/:id', scoreController.getScoreById);
router.put('/api/score/:id', scoreController.updateScore);
router.delete('/api/score/:id', scoreController.deleteScore);

module.exports = router;
