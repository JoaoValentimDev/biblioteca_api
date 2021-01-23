const booksRoute = require('./books.routes');

const loadAllRoutes = (req, res) => {
  booksRoute('/books', req, res);
};

module.exports = loadAllRoutes;
