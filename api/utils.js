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

function processaCorpo(corpoMock, corpoRecebido) {
  const value1 = JSON.stringify(corpoMock);
  const value2 = JSON.stringify(corpoRecebido);
  return value1 === value2;
}

function processaStatusEsperado(statusMock, statusEsperado) {
  if (statusEsperado === null) {
    return true;
  }

  return `${statusMock}` === `${statusEsperado}`;
}

function processaRequisicao(req, endpoint, statusEsperado = null) {
  const mocks = carregaMocks(endpoint);

  const valid = {
    headers: false,
    query: false,
    params: false,
    body: false,
    statusEsperado: false,
    response: null,
  };

  for (let i = 0; i < mocks.length; i++) {
    const mock = mock[i];

    valid.headers = processaValores(mock.request.headers, req.headers);
    valid.query = processaValores(mock.request.query, req.query);
    valid.params = processaValores(mock.request.params, req.params);
    valid.body = processaCorpo(mock.request.body, req.body);
    valid.statusEsperado = processaStatusEsperado(mock.response.status, statusEsperado);

    if (valid.headers && valid.query && valid.params && valid.body && valid.statusEsperado) {
      valid.response = mock.response;
      break;
    }
  }

  return valid;
}

function montaResposta(req, res, endpoint, expectedStatus = null) {
  const valid = processaRequisicao(req, endpoint, expectedStatus);

  if (!valid.response) {
    return res.status(400).send();
  }

  res.status(valid.response.status);

  if (!valid.response.content) {
    return res.send();
  }

  return res.json(valid.response.content);
}

module.exports = {
  montaResposta,
  carregaMocks
}