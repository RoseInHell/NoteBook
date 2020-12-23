const Router = require('koa-router');

const { verifyAuth, verifyPermission } = require('../middleware/auth.middleware');

const { create, reply, update, remove, list } = require('../controller/comment.controller')

const commentRouter = new Router({prefix: '/comment'});



commentRouter.post('/', verifyAuth, create);
// 对某一条评论进行回复
commentRouter.post('/:commentId/reply', verifyAuth, reply);

// 修改评论
commentRouter.patch('/:commentId', verifyAuth, verifyPermission, update );

// 删除评论
commentRouter.delete('/:commentId', verifyAuth, verifyPermission, remove);

// 获取评论列表
commentRouter.get('/', list);

module.exports = commentRouter;
