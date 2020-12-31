const userService = require("../service/user.service");

class UseController {
  async create(ctx, next) {
    // 获取用户请求传递的参数
    const user = ctx.request.body;
    
    // 创建用户
    const result = await userService.create(user);

    ctx.body = result
  }
}


module.exports = new UseController();