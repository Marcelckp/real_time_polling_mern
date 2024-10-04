const Express = require("express");
const cors = require("cors");
const app = Express();
const { Server } = require("socket.io");

app.use(Express.json());
app.use(Express.urlencoded({ extended: false }));
app.use(cors());
const httpServer = require("http").createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
  reconnect: true,
});
// console.log(io);
io.on("connection", async (socket) => {
  console.log("user connected", socket.id);
  socket.on("disconnect", function () {
    console.log("user disconnected");
  });
});
io.on("error", (socket) => {
  console.log("user diconnected");
});

module.exports = { app, io, httpServer };
