const BooksDAO = require('../infra/BooksDAO');
const { json } = require('../utils/server.utils');
const {
  fieldStringIsNull,
  fieldMinSizeIs,
} = require('../utils/validations.utils');
class Books {
  #existsISBN = async (isbn) => {
    return (await BooksDAO.findOneByISBN(isbn)) === undefined ? false : true;
  };

  #fieldsIsNotNull = (book) => {
    const keys = Object.keys(book);
    const filterKeys = (key) => {
      if (fieldStringIsNull(book[key])) return key;
    };
    return keys.filter(filterKeys);
  };

  async create(res, book) {
    const data = JSON.parse(book);

    const existsISBN = await this.#existsISBN(data.isbn);

    if (this.#fieldsIsNotNull(data).length > 0)
      return json(res, { message: 'Opa! Você esqueceu alguma coisa.' }, 402);

    if (existsISBN)
      return json(res, { message: 'Opa! esse livro já existe.' }, 402);

    await BooksDAO.create(res, data);

    return json(res, JSON.parse(JSON.stringify(data).toLowerCase()), 201);
  }
}

module.exports = Books;
