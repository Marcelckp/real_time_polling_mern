const errorMiddleware = (error, _req, res, next) => {
  try {
    if (error && error.error && error.error.isJoi) {
      const e = error;
      console.error(`StatusCode:: 400, Message:: ${e.error}`);
      res
        .status(400)
        .json({ error: `${e.error}, Invalid ${e.type} paramater` });
    } else {
      const status = error.status || 500;
      const message = error.message || "Internal Server Error";
      console.error(`StatusCode::: ${status}, Message::: ${message}`);

      res.status(status).json({ message });
    }
  } catch (error) {
    console.error(`StatusCode:: 500, Message:: ${error}`);
    next(error);
  }
};

module.exports = errorMiddleware;
