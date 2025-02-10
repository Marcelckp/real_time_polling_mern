const { setUp } = require("./utils/db");
const ErrorHandler = require("./middlewares/error.middleware");
const Four04Handler = require("./middlewares/404.middleware");

const { app, httpServer } = require("./utils/server");

setUp();

app.use(Four04Handler);

app.use(ErrorHandler);

module.exports = httpServer;