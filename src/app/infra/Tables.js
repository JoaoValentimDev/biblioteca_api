const db = require('../../config/database.config');
const { showErrorTableMessage } = require('../utils/database.utils');

class Tables {
  #serealizeTables = () => {
    console.log(`\x1b[34m[QUERY] Criação de tabelas iniciada...\x1b[34m`);
    db.run('PRAGMA foreign_keys=ON', showErrorTableMessage);
    this.createTableBooks();
    console.log(`\x1b[34m[QUERY] Criação de tabelas finalizada \x1b[34m`);
  };

  constructor() {
    db.serialize(this.#serealizeTables);
  }

  createTableBooks() {
    const sql = `
    CREATE TABLE IF NOT EXISTS BOOKS (
        ID INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
        TITLE VARCHAR(80) NOT NULL,
        ISBN VARCHAR(30) NOT NULL UNIQUE,
        AUTHOR VARCHAR(67),
        IMAGE_URL VARCHAR(255) NOT NULL,
        COMMENTS TEXT,
        PUBLISHING_COMPANY VARCHAR(255) NOT NULL,
        PUBLICATE_DATE VARCHAR(30) NOT NULL
    )
  `;
    db.run(sql, showErrorTableMessage);
  }
}

module.exports = Tables;
