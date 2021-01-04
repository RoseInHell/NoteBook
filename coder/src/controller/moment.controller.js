const momentService = require('../service/moment.service');

class MomentController {
  async create(ctx, next) {
    // 1. 获取数据(userId, content)
    const { content } = ctx.request.body;
    const userId = ctx.user.id;

    // 2.将数据插入到数据库中
    const result = await momentService.create(content, userId);

    ctx.body = result;
  }

  async list(ctx, next) {
    const { offset, size } = ctx.query;
    const result = await momentService.getMomentList(offset, size);

    ctx.body = result;
  }

  async detail(ctx, next) {
    const { momentId } = ctx.params;
    const result = await momentService.getMomentById(momentId);

    ctx.body = result;

  }
}

module.exports = new MomentController();