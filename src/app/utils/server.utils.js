const { createLoggerFile, getFileName } = require('./file.utils');
const { showShellLogger } = require('./console.utils');
const { createResponse, defineMethodsHTTP } = require('./http.utils');

module.exports = {
  cors(res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', '*');
  },
  existsRoute(route) {
    const routes = ['/books/'];
    return routes.includes(route) ? true : false;
  },
  logger(req) {
    const content = `[${req.method}] ${req.url} ${new Date().toISOString()}`;
    const path = getFileName();
    createLoggerFile({
      path,
      content,
      encoding: 'utf-8',
    });
    showShellLogger(content);
  },
  html: (res, htmlCode, statusCode = 200) =>
    createResponse({
      res,
      data: htmlCode,
      charset: 'utf-8',
      statusCode,
      headerContentType: 'text/html',
    }),
  json: (res, jsonCode, statusCode = 200) =>
    createResponse({
      res,
      data: JSON.stringify(jsonCode),
      charset: 'utf-8',
      statusCode,
      headerContentType: 'application/json',
    }),
  get: (req, res, url, cb) => defineMethodsHTTP('GET', url, cb, req, res),
  post: (req, res, url, cb) => defineMethodsHTTP('POST', url, cb, req, res),
  put: (req, res, url, cb) => defineMethodsHTTP('PUT', url, cb, req, res),
  delete: (req, res, url, cb) => defineMethodsHTTP('DELETE', url, cb, req, res),
};
