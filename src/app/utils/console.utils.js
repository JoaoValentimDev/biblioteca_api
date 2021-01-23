module.exports = {
  showShellLogger(contentLogger) {
    const randNumber = Math.floor(Math.random() * 7);
    console.log(`\x1b[3${randNumber}m${contentLogger}\x1b[3${randNumber}m`);
  },
};
