const db = require('../../config/database.config');
const { promisify } = require('util');
const runSQL = promisify(db.run).bind(db);
const selectOneSQL = promisify(db.get).bind(db);
const selectAllSQL = promisify(db.all).bind(db);
module.exports = {
  runSQL,
  selectOneSQL,
  selectAllSQL,
  showErrorTableMessage(error) {
    if (error) console.log(`[ERRO] Tabelas não poedem ser criadas: ${error}`);
  },
  showErrorSQLCommand(error) {
    console.log(`[ERRO] SQL inválido: ${error}`);
  },
  fieldsTableBooks({
    title,
    isbn,
    image_url,
    comments,
    author,
    publishing_company,
    publicate_date,
  }) {
    return [
      title,
      isbn,
      image_url,
      comments,
      author,
      publishing_company,
      publicate_date,
    ];
  },
};
