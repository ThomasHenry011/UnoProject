const express = require('express');
const playerRoutes = require('./routes/playerRoutes');
const gameRoutes = require('./routes/gameRoutes');
const cardRoutes = require('./routes/cardRoutes');
const scoreRoutes = require('./routes/scoreRoutes');
const { initModels } = require('./models');

const app = express();

app.use(express.json());

app.use(playerRoutes);
app.use(gameRoutes);
app.use(cardRoutes);
app.use(scoreRoutes);

initModels();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
