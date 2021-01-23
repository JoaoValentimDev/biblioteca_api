const fs = require('fs');
const path = require('path');

const fileHandlingError = (error) => {
  if (error) return console.log(`\x1b[32m[FILE ERROR] ${error}`);
};

module.exports = {
  getFileName() {
    const date = new Date();
    const stringDate = `${date.getFullYear()}-${date.getMonth()}-${date.getDay()}`;
    const file = path.join(__dirname, '..', 'logs/') + `${stringDate}.log`;

    return file;
  },
  createLoggerFile({ path, content, encoding } = { path, content, encoding }) {
    if (!fs.existsSync(path)) {
      fs.writeFile(path, `${content}\n`, { encoding }, fileHandlingError);
    } else {
      fs.appendFile(path, `${content}\n`, { encoding }, fileHandlingError);
    }
  },
};
