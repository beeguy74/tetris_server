const express = require('express');


class Server {

  constructor(host, port) {
    this.host = host;
    this.port = port;
    this.app = express();
  };

  start(DIST_DIR, HTML_FILE) {
    const mockResponse = {
      foo: 'bar',
      bar: 'foo'
    };
    this.app.use(express.static(DIST_DIR));
    this.app.get('/api', (req, res) => {
      res.send(mockResponse);
    });
    this.app.get('/', (req, res) => {
      res.sendFile(HTML_FILE);
    });
    this.app.listen(this.port, () => {
      console.log('App listening on port: ' + this.port);
    });
  }

};

module.exports = Server;
