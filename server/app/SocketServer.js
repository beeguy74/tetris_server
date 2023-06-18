class SocketServer {
  constructor(expressApp){
    const http = require("http");
    const server = http.createServer(expressApp);
    const { Server } = require("socket.io");
    this.io = new Server(server);
  };

  start(){
    this.io.on('connection', (socket) => {
      console.log('user connected');
    });
  };
};

module.exports = SocketServer;
