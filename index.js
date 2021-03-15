// const http = require("http");

// const server = http.createServer((req, res) => {
//   res.end("hello world");
// });

// server.listen(3000, "127.0.0.1", () => {
//   console.log("Serveur tourne sur localhost:3000");
// });

// const fs = require("fs");

// fs.readFile("LICENSE", "utf-8", (error, data) => {
//   if (error !== null) {
//     console.log(error);

//     return;
//   }

//   console.log(data);
// });

// fs.mkdir("test3/test", (err) => {
//   console.log(err);
// });

// const childProcess = require("child_process");

// childProcess.exec("ls -la", (err, stdout) => {
//   console.log(stdout);
// });

// const os = require("os");

// const getInfos = () => {
//   return {
//     uptime: os.uptime() / 3600,
//     platform: os.platform(),
//   };
// };

// const infos = getInfos();

// console.log(infos);

const crypto = require("crypto");

const hash = crypto.createHmac("sha256", "secret").update('test').digest('hex');

console.log(hash)
