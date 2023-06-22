const SocketServer = require('../../framework/SocketServer');
const userController = require('../controllers/userController');

const userRouter = SocketServer.Router();
userRouter.use('login', userController.login);

module.exports = userRouter;