const express = require('express');
const { montaResposta } = require('./utils');

const routerMain = express.Router();

routerMain.get('/restaurants', (req, res) => {
  montaResposta(req, res, 'restaurants');
});

routerMain.get('/restaurants/:id', (req, res) => {
  montaResposta(req, res, 'restaurant-detail');
});

routerMain.get('/restaurants/:id/menu', (req, res) => {
  montaResposta(req, res, 'menu');
});

routerMain.get('/restaurants/:id/reviews', (req, res) => {
  montaResposta(req, res, 'reviews');
});

module.exports = routerMain;