const App = require('./config/server.config');
const PORT = 3000 || process.env.PORT;
new App(PORT, (error) => {
  if (error) console.error(error);
  console.log(`\x1b[36m[API] app running on port ${PORT}\x1b[36m`);
});
