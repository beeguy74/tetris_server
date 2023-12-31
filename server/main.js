const Server = require("./app/Server");
const SocketServer = require("./app/SocketServer");
const path = require("path");

const port = process.env.PORT || "3000";
const host = process.env.HOST || "0.0.0.0";

const myApp = new Server(host, port);

const DIST_DIR = path.join(__dirname, "../build");
const HTML_FILE = path.join(DIST_DIR, "index.html");

const myIo = new SocketServer(myApp.app);
myIo.start();


myApp.start(DIST_DIR, HTML_FILE);
