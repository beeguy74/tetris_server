const express = require('express');
//express middleware alows serve SSR with routing
const fallback = require('express-history-api-fallback'); 


class Server {

  constructor(host, port) {
    this.host = host;
    this.port = port;
    this.app = express();
  };

  start(DIST_DIR, HTML_FILE) {
    this.app.use(express.static(DIST_DIR));
    this.app.use(fallback(HTML_FILE, {DIST_DIR}));
    this.app.listen(this.port, () => {
      console.log('App listening on port: ' + this.port);
    });
  }

};

module.exports = Server;
