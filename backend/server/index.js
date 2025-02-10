const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const ErrorHandler = require("./middlewares/error.middleware");
const Four04Handler = require("./middlewares/404.middleware");
const { app, httpServer } = require("./utils/server");

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
const memData = [
  {
    id: 1,
    time: new Date().toLocaleTimeString(),
    text: "Time - 1 " + new Date().toLocaleTimeString(),
  },
];

const router = express.Router();

setInterval(() => {
  memData.push({
    id: memData.length + 1,
    time: new Date().toLocaleTimeString(),
    text:
      "Time - " + (memData.length + 1) + " " + new Date().toLocaleTimeString(),
  });
}, 1000);

router.get("/poll", (req, res) => {
  res.json({ data: memData });
});

router.get("/test", (req, res) => {
  res.send("Hello World");
});

app.use("/", router);

// Error handling
app.use(Four04Handler);
app.use(ErrorHandler);

module.exports = httpServer;
