const swaggerAutogen = require('swagger-autogen')();

const outputFile = './api/swagger.json';
const endpointsFiles = ['./api/routes.js'];

const doc = {
  info: {
    title: 'My Mock',
  },
  host: 'localhost:3000',
  schemes: ['http'],
  consumes: ['application/json'],
  produces: ['application/json']
};

swaggerAutogen(outputFile, endpointsFiles, doc);