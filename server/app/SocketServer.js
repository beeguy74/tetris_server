class SocketServer {
  constructor(expressApp){
    const http = require("http");
    const server = http.createServer(expressApp);
    const { Server } = require("socket.io");
    this.io = new Server(server);
  };

  start(){
    this.io.listen(3001);
    console.log('sockets started')
    this.io.on('connection', (socket) => {
      console.log('user connected');
    });
  };
};

module.exports = SocketServer;
