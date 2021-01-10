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

  async update(ctx, next) {
    const { momentId } = ctx.params;
    const { content } = ctx.request.body;
    
    const result = await momentService.update(momentId, content);

    ctx.body = result;
  }

  async remove(ctx, next) {
    const { momentId } = ctx.params;

    const result = await momentService.remove(momentId);

    ctx.body = result
  }

  async addLabels(ctx, next) {
    const { labels } = ctx.labels;
    const { momentId } = ctx.params;

    for (let label of labels) {
      const isExist = await momentService.hasLabel(momentId, labels.id);

      if (!isExist) {
        await momentService.addLabel(momentId, label.id);
      }
    }

    ctx.body = "给动态添加标签成功";

  }
}

module.exports = new MomentController();