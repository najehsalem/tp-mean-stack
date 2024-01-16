// server.js
const express = require('express');
const app = express();
const port = 3000;

// Middleware pour gérer les requêtes JSON
app.use(express.json());

// Liste des posts
const postList = [
  { id: '1', titre: 'Premier post', contenu: 'détails premier post' },
  { id: '2', titre: 'Deuxième post', contenu: 'détails deuxième post' },
  { id: '3', titre: 'Troisième post', contenu: 'détails troisième post' },
];

// Route GET pour récupérer la liste de posts
app.get('/postList', (req, res) => {
  res.json(postList);
});

// Écoute du serveur sur le port spécifié
app.listen(port, () => {
  console.log(`Serveur en cours d'exécution sur http://localhost:${port}`);
});
