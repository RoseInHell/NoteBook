const Router = require('koa-router');

const { verifyAuth, verifyPermission } = require('../middleware/auth.middleware');

const { create, reply, update } = require('../controller/comment.controller');

const commentRouter = new Router({prefix: '/comment'});

// 评论某个动态
commentRouter.post('/', verifyAuth, create);

// 对某个评论进行回复
commentRouter.post('/:commentId/reply', verifyAuth, reply);

// 修改某个评论
commentRouter.patch('/:commentId', verifyAuth, verifyPermission, update);

module.exports = commentRouter;