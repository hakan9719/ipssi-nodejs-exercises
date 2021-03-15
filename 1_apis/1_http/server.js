const http = require("http");

const axios = require("axios").default;

const server = http.createServer((req, res) => {
  res.end("<h1>Welcome to my node server</h1>");
});

server.listen(5000, "localhost", () => {
  console.log("Welcome to my node server");
});

axios.get("http://google.com").then((responnse) => console.log(responnse));
