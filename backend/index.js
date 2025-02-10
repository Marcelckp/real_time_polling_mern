require("dotenv").config();

const server = require("./server");

const port = process.env.PORT || 3030;
server.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log("Server running on port", `${port}`);
});