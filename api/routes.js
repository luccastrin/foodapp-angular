const express = require('express');
const { montaResposta, carregaMocks } = require('./utils');

const routerMain = express.Router();

// console.log(carregaMocks('restaurants'))

routerMain.get('/restaurants', (req, res) => {
  montaResposta(req, res, 'restaurants');
});

module.exports = {
  routerMain
}