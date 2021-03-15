const app = require("express")();
const http = require("http").Server(app);
const io = require("socket.io")(http);

app.get("/", (req, res) => {
  res.sendFile(`${__dirname}/index.html`);
});

const history = [];
let users = [];

io.on("connection", (socket) => {
  console.log("somebody is now connected");

  console.log(socket.id);
  const userName = `User ${socket.id}`;
  users.push({
    id: socket.id,
    username: userName,
  });

  io.emit("user connected", users);

  io.emit("history", history);

  socket.on("disconnect", () => {
    console.log("a user disconnected");
    console.log("TEST", socket.id);

    const updatedUser = users.filter((user) => user.id !== socket.id);
    console.log(updatedUser);

    users = updatedUser;

    io.emit("user disconnected", socket.id);
  });

  socket.on("message", (message) => {
    console.log(`Message reçu : ${message}`);

    if (history.length > 10) {
      history.shift();
    }

    history.push(message);

    io.emit("message", message);
  });
});

http.listen(3000, () => {
  console.log("Server is running on 3000");
});
