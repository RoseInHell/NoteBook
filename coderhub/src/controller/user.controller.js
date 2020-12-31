const fs = require('fs');

const { AVATAR_PATH } = require('../constants/file-path');
const fileService = require('../service/file.service');
const userService = require('../service/user.service');

class UserController {
  async create(ctx, next) {
    // 获取用户请求传递的参数
    const user = ctx.request.body;
    
    // 查询数据
    const result = await userService.create(user);
    
    // 返回数据
    ctx.body = result;
  }

  async avatarInfo(ctx, next) {
    // 1.用户的头像是哪个一个文件呢
    const { userId } = ctx.params;
    const avatarInfo = await fileService.getAvatarByUserId(userId);

    // 2.提供图像信息
    // 设置这个后可以展示图片
    ctx.response.set('content-type', avatarInfo.mimetype);
    // 直接下载
    ctx.body = fs.createReadStream(`${AVATAR_PATH}/${avatarInfo.filename}`);
  }
  
}

module.exports = new UserController();