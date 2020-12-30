const Router = require('koa-router');

const { create } = require('../controller/use.controller');
const { verifyUser } = require('../middleware/user.middleware');

const userRouter = new Router({prefix: '/users'});

userRouter.post('/', verifyUser);

module.exports = userRouter;

