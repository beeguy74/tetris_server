const Server = require('./app/Server');
const path = require('path');



const port = process.env.PORT || "3000";
const host = process.env.HOST || "0.0.0.0";

const myApp = new Server(host, port);

const DIST_DIR = path.join(__dirname, '../build');
const HTML_FILE = path.join(DIST_DIR, 'index.html');

myApp.start(DIST_DIR, HTML_FILE);
