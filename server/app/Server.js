class Server {

  constructor(host, port) {
    this.host = host;
    this.port = port;
  };

  start(DIST_DIR, HTML_FILE) {
    const express = require('express');
    const app = express();

    const mockResponse = {
      foo: 'bar',
      bar: 'foo'
    };
    app.use(express.static(DIST_DIR));
    app.get('/api', (req, res) => {
      res.send(mockResponse);
    });
    app.get('/', (req, res) => {
      res.sendFile(HTML_FILE);
    });

    app.listen(this.port, () => {
      console.log('App listening on port: ' + this.port);
    });
  }

};

module.exports = Server;
