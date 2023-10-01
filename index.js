const http = require("http");
const app = require("./src/config/express.config");
const server = http.createServer(app);

server.listen("8000", "localhost", (err) => {
  if (!err) {
    console.log("Server is listening");
  }
});
