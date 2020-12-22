const commentService = require('../service/comment.service');

class CommentController {
  async create(ctx, next) {
    const { momentId, content } = ctx.request.body;
    const { id } = ctx.user;

    const result = await commentService.create(content, momentId, id);

    ctx.body = result
  }

  async reply(ctx, next) {
    const { momentId, content} = ctx.request.body;
    const { commentId } = ctx.params;
    const { id } = ctx.user;
    
    const result = await commentService.reply(content, momentId, id, commentId);

    ctx.body = result;
  }

  async update(ctx, next) {
    const { commentId } = ctx.params;
    const { content } = ctx.request.body;

    const result = await commentService.update(commentId, content);
    ctx.body = result;
  }
}


module.exports = new CommentController()