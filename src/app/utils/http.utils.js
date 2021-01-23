module.exports = {
  defineMethodsHTTP(method, url, cb, req, res) {
    if (req.method === method && req.url === url) {
      cb(req, res);
    }
  },
  createResponse({ res, headerContentType, statusCode, charset, data } = {}) {
    res.writeContinue();
    res.setHeader('Content-Type', headerContentType);
    res.statusCode = statusCode;
    res.charset = charset;
    res.end(data);
  },
};
