const { json } = require('../utils/server.utils');
const { internalError } = require('../utils/errorsMessage.utils');
const Books = require('../models/Books');
const BooksDAO = require('../infra/BooksDAO');
const request = {
  body: null,
};
const booksModel = new Books();
class BookControllers {
  static async findAll(req, res) {
    try {
      const books = await BooksDAO.findAll();
      json(res, JSON.parse(JSON.stringify(books).toLocaleLowerCase()), 200);
    } catch (e) {
      json(res, internalError(e), 500);
    }
  }

  static crate(req, res) {
    req
      .on('data', (data) => {
        request.body = JSON.parse(JSON.stringify(data.toString()));
      })
      .on('end', async () => {
        try {
          await booksModel.create(res, request.body);
        } catch (e) {
          json(res, internalError(e), 500);
        }
      });
  }
}

module.exports = BookControllers;
