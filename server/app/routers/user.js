const Router = require('../../framework/Router');
const userController = require('../controllers/user');

const loginRouter = new Router();
loginRouter.use('login', userController.login);

module.exports = loginRouter;