const fileService = require('../service/file.service');
const userService = require('../service/user.service');
const { APP_PORT, APP_HOST} = require('../app/config');

class FileController {
  async saveAvatarInfo(ctx, next) {
    console.log(ctx.req.file)
    const { id } = ctx.user;
    const { mimetype, filename, size } = ctx.req.file;
    
    await fileService.createAvatar(mimetype, filename, size, id);

    const avatarUrl = `${APP_HOST}:${APP_PORT}/users/${id}/avatar`;
    await userService.updateAvatarUrlById(avatarUrl, id);

    ctx.body = {
      statusCode: 1110,
      message: '用户上传头像成功'
    }
  }
}

module.exports = new FileController();