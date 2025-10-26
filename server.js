const express = require('express');
const path = require('path');
const app = express();

// Servir arquivos estáticos
app.use(express.static(__dirname));

// Configurar tipos MIME
app.use((req, res, next) => {
  if (req.url.endsWith('.png')) {
    res.type('image/png');
  } else if (req.url.endsWith('.html')) {
    res.type('text/html');
  } else if (req.url.endsWith('.css')) {
    res.type('text/css');
  } else if (req.url.endsWith('.js')) {
    res.type('application/javascript');
  }
  next();
});

// Rota principal
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Porta
const PORT = process.env.PORT || 80;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`✅ Servidor rodando na porta ${PORT}`);
  console.log(`🌐 Site: http://localhost:${PORT}`);
});
