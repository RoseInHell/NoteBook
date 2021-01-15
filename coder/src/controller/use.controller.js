const fs = require('fs');
const { AVATAR_PATH } = require('../constants/file-path');
const fileService = require("../service/file.service");
const userService = require("../service/user.service");

class UseController {
  async create(ctx, next) {
    // 获取用户请求传递的参数
    const user = ctx.request.body;
    
    // 创建用户
    const result = await userService.create(user);

    ctx.body = result
  }

  async avatarInfo(ctx, next) {
    const { userId } = ctx.params;
    console.log(userId)
    const avatarInfo = await fileService.getAvatarByUserId(userId);
    console.log(avatarInfo)

    ctx.response.set('content-type', avatarInfo.mimetype);

    ctx.body = fs.createReadStream(`${AVATAR_PATH}/${avatarInfo.filename}`)
  }
}


module.exports = new UseController();