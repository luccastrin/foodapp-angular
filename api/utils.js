const fs = require('fs');

const path = './api/tescases';
const path2 = './testcases';

function carregaMocks(endpoint) {
  let testcases = [];
  fs.readdirSync(`${path}/${endpoint}`).map(file => {
    const c = require(`${path2}/${endpoint}/${file}`);
    c.fileName = file;
    testcases.push(c);
  });
  return testcases;
}

function comparaRequisicaoEMock(item, compararCom) {
  return (
    (compararCom[item.name.toLowerCase()] || compararCom[item.name]) && (compararCom[item.name.toLowerCase()] ? compararCom[item.name.toLowerCase()] : compararCom[item.name]) == item.value
  );
}

function processaValores(valores, compararCom) {
  return valores.reduce((anterior, item) => anterior ? comparaRequisicaoEMock(item, compararCom) : anterior, true);
}

module.exports = {
  carregaMocks
}