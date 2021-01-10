const Router = require('koa-router');

const momentRouter = new Router({prefix: '/moment'});

const { verifyAuth, verifyPermission } = require('../middleware/auth.middleware');

const { create, list, detail, update, remove, addLabels } = require('../controller/moment.controller');

const { verifyLabelExists } = require('../middleware/label.middleware');

// 发表动态
momentRouter.post('/', verifyAuth, create);

// 获取动态
momentRouter.get('/', list);
momentRouter.get('/:momentId', detail);

// 修改动态接口
momentRouter.patch('/:momentId', verifyAuth, verifyPermission, update);

// 删除动态接口
momentRouter.delete('/:momentId', verifyAuth, verifyPermission, remove);

// 给动态添加标签
momentRouter.post('/:momentId/labels', verifyAuth, verifyPermission, verifyLabelExists, addLabels);

module.exports = momentRouter;