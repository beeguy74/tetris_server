const userRouter = require('./app/routers/userRouter');
const roomRouter = require('./app/routers/roomRouter');
const DataService = require('./framework/DataService');

const Server = require("./framework/Server");
const SocketServer = require("./framework/SocketServer");
const path = require("path");

const port = process.env.PORT || "3000";
const host = process.env.HOST || "0.0.0.0";

const myApp = new Server(host, port);

const DIST_DIR = path.join(__dirname, "../build");
const HTML_FILE = path.join(DIST_DIR, "index.html");

const myIo = new SocketServer(myApp.app, DataService);

myIo.use(userRouter);
myIo.use(roomRouter);

myIo.start();


myApp.start(DIST_DIR, HTML_FILE);
