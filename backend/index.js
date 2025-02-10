require("dotenv").config();

const server = require("./server");

const port = process.env.PORT || 3030;
server.listen(port, (err) => {
  if (err) {
    // eslint-disable-next-line no-console
    console.error("Error starting server:", err);
  } else {
    // eslint-disable-next-line no-console
    console.log("Server running on port", `${port}`);
  }
});