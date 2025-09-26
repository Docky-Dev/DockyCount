const express = require('express');
const axios = require('axios');

const app = express();
const port = 443;

const channelId = 'UCX6OQ3DkcsbYNE6H8uQQuVA';

app.get('/api/youtube/:channelId', async (req, res) => {
  try {
    const response = await axios.get(`https://backend.mixerno.space/api/youtube/estv3/${req.params.channelId}`);
    res.json(response.data);
  } catch (error) {
    console.error('Erreur lors de la récupération des données :', error);
    res.status(500).json({ error: 'Erreur interne du serveur' });
  }
});

app.listen(port, () => {
  console.log(`Backend : http://localhost:${port}`);
});
