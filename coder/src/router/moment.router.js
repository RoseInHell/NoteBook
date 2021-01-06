const Router = require('koa-router');

const momentRouter = new Router({prefix: '/moment'});

const { verifyAuth, verifyPermission } = require('../middleware/auth.middleware');

const { create, list, detail, update, remove } = require('../controller/moment.controller');

// 发表动态
momentRouter.post('/', verifyAuth, create);

// 获取动态
momentRouter.get('/', list);
momentRouter.get('/:momentId', detail);

// 修改动态接口
momentRouter.patch('/:momentId', verifyAuth, verifyPermission, update);

// 删除动态接口
momentRouter.delete('/:momentId', verifyAuth, verifyPermission, remove);


module.exports = momentRouter;