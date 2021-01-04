const Router = require('koa-router');

const momentRouter = new Router({prefix: '/moment'});

const { verifyAuth } = require('../middleware/auth.middleware');

const { create, list, detail } = require('../controller/moment.controller');

// 发表动态
momentRouter.post('/', verifyAuth, create);

// 获取动态
momentRouter.get('/', list);
momentRouter.get('/:momentId', detail)


module.exports = momentRouter;