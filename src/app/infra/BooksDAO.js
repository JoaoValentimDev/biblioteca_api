const { json } = require('../utils/server.utils');
const { internalError } = require('../utils/errorsMessage.utils');
const {
  runSQL,
  selectAllSQL,
  selectOneSQL,
  fieldsTableBooks,
  showErrorSQLCommand,
} = require('../utils/database.utils');

class BooksDAO {
  static async create(res, data) {
    const sql = `
    INSERT INTO BOOKS (
      TITLE,
      ISBN,
      AUTHOR,
      IMAGE_URL,
      COMMENTS,
      PUBLISHING_COMPANY,
      PUBLICATE_DATE
    ) VALUES (?, ?, ?, ?, ?, ?, ?)
  `;
    try {
      await runSQL(sql, fieldsTableBooks({ ...data }));
    } catch (e) {
      json(res, internalError(e), 500);
    }
  }

  static async findAll() {
    const sql = `
    SELECT * FROM BOOKS
    `;
    try {
      const booksQuery = await selectAllSQL(sql);
      return booksQuery;
    } catch (e) {
      json(res, internalError(e), 500);
    }
  }

  static async findOneByISBN(isbn) {
    const sql = `
    SELECT * FROM BOOKS WHERE ISBN = ?
    `;
    try {
      return await selectOneSQL(sql, [isbn]);
    } catch (e) {
      json(res, internalError(e), 500);
    }
  }
}

module.exports = BooksDAO;
