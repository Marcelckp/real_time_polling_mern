/**
 * Handles sending message incase of a 404
 * @param  {Express.Request} req
 * @param  {Express.Response} res
 * @param  {function} next
 */
const Four04Middleware = (req, res, next) => {
  res.status(404);
};

module.exports = Four04Middleware;
