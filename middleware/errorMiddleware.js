
function notFound(req, res, next) {
  res.status(404).json({ message: 'Route not found' });
}
function errorHandler(err, req, res, next) {
  const statusCode = err.statusCode || 500;
  res.status(statusCode).json({ message: err.message || 'Internal Server Error' });
}
module.exports = { notFound, errorHandler };
