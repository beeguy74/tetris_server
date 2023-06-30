const Router = require('./Router');


class SocketServer {
  constructor(expressApp, dataService) {
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
    this.dataService = new dataService;
  };

  use(router) {
    this.socketRoutes = new Map([...this.socketRoutes, ...router.routes]);
  }

  static Router() {
    return new Router;
  }

  start() {
    this.io.listen(3001);
    console.log("sockets started");
    this.io.on("connection", (socket) => {
      console.log("user connected");

      socket.onAny((event, ...args) => {
        console.log('EVENT: ', event, args);
      });

      this.socketRoutes.forEach((cb, key, map) => {
        socket.on(key, cb.bind({dataService: this.dataService, socket, io: this.io}));
      });

    });
    this.io.on("disconnection", (socket) => {
      console.log("user disconnected");
    });
  }
}

module.exports = SocketServer;
