const express = require('express');
const cors = require('cors');
const app = express();
const rutasPersonas = require('./rutasPersonas')

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT ? process.env.PORT : 3000;

app.get('/prueba', (req, res) => {
  res.json({status: 'ok'})
})

app.use('/api/personas', rutasPersonas);

const server = app.listen(PORT, () => {
  console.log('App corriendo en el puerto ' + PORT);
})


module.exports = server;
