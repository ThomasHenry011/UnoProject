const express = require('express');
const cardController = require('../controllers/cardController');

const router = express.Router();

router.post('/api/card', cardController.createCard);
router.get('/api/card/:id', cardController.getCardById);
router.put('/api/card/:id', cardController.updateCard);
router.delete('/api/card/:id', cardController.deleteCard);

module.exports = router;
