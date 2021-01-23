const http = require('http');
const routes = require('../app/routes');
const {
  json,
  cors,
  logger,
  existsRoute,
} = require('../app/utils/server.utils');
const { notFoundError } = require('../app/utils/errorsMessage.utils');
const Tables = require('../app/infra/Tables');

const requests = (req, res) => {
  cors(res);
  routes(req, res);
  logger(req, res);
};

class App {
  constructor(port, cb) {
    new Tables();
    const app = http.createServer();
    this.loadSettings(app);
    app.listen(port, cb);
  }

  loadSettings(app) {
    app.on('request', requests);
    app.on('request', (req, res) => {
      if (!existsRoute(req.url)) {
        json(res, notFoundError(req), 404);
      }
    });
  }
}

module.exports = App;
