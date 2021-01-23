const { json } = require('./server.utils');

module.exports = {
  fieldStringIsNull(fieldValue = '') {
    if (typeof fieldValue !== 'string' || fieldValue === 0 || fieldValue === '')
      return true;
    else return false;
  },
  fieldMinSizeIs(fieldValue = '', minSize = 0) {
    if (fieldValue.length > minSize) return true;
    else return false;
  },
  fieldMaxSizeIs(fieldValue = '', maxSize = 0) {
    if (fieldValue.length > maxSize) return true;
    else return false;
  },
};
