const userController = require("../app/controllers/user");

class SocketServer {
  constructor(expressApp) {
    const http = require("http");
    const server = http.createServer(expressApp);
    const { Server } = require("socket.io");
    this.io = new Server(server, {
      cors: {
        origin: "http://0.0.0.0:3000",
      },
    });
    this.name = "SocketServer";
    this.socketRoutes = new Map();
    this.socketRoutes.set('login', loginController.login)
  };

  start() {
    this.io.listen(3001);
    console.log("sockets started");
    this.io.on("connection", (socket) => {
      console.log("user connected");

      socket.onAny((event, ...args) => {
        console.log(event, args);
      });
      this.socketRoutes.forEach((cb, key, map) => {
        socket.on(key, cb);
      })
    });
    this.io.on("disconnection", (socket) => {
      console.log("user disconnected");
    });
  }
}

module.exports = SocketServer;
