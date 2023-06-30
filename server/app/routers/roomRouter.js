const SocketServer = require('../../framework/SocketServer');
const roomController = require('../controllers/roomController');

const roomRouter = SocketServer.Router();
roomRouter.use('createRoom', roomController.newRoom);

module.exports = roomRouter;