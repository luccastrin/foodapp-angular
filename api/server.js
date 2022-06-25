const cors = require('cors');
const express = require('express');
const swaggerUi = require('swagger-ui-express');

const swaggerFile = require('./swagger.json');
const routes = require('./routes');

console.log(routes)

const app = express();
const port = 4201;

app.use(cors());
app.use(express.json());

app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.use('/', routes);

app.listen(port, function () {
  console.log(`Mock web server listening on port http://localhost:${port}/swagger`);
});
