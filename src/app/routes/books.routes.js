const { get, post, data } = require('../utils/server.utils');
const BookControllers = require('../controllers/BookController');

module.exports = (route, req, res) => {
  const url = `${route}/`;
  get(req, res, url, BookControllers.findAll);
  post(req, res, url, BookControllers.crate);
};
