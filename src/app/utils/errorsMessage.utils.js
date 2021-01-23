module.exports = {
  internalError: (e) => ({
    message: 'Server Internal Error',
    error: e.message,
  }),
  notFoundError: ({ url } = req) => ({
    message: '404 Not Found',
    requestTo: url,
  }),
};
