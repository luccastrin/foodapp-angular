const express = require('express');
const { montaResposta } = require('./utils');

const routerMain = express.Router();

routerMain.get('/', (req, res) => {
  montaResposta(req, res, 'restaurants');
});

module.exports = routerMain;