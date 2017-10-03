// Helper function that wraps another function and wraps it inside promise (just in case the inner promise will be rejected)
const asyncMiddleware = fn => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};

module.exports.asyncMiddleware = asyncMiddleware;