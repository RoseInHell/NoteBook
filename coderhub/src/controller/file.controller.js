const fileService = require('../service/file.service');
const userService = require('../service/user.service');
const { APP_HOST, APP_PORT } = require('../app/config');


class FileController {
  async saveAvatarInfo(ctx, next) {
    // 1.获取图像相关的信息
    const { mimetype, filename, size } = ctx.req.file;
    const { id } = ctx.user;

    // 2.将图像信息数据保存到数据库中
    await fileService.createAvatar(mimetype, filename, size, id);

    // 3.将图片地址保存到数据库中
    const avatarUrl = `${APP_HOST}:${APP_PORT}/users/${id}/avatar`;
    await userService.updateAvatarUrlById(avatarUrl, id);

    // 4.返回结果
    ctx.body = {
      statusCode: 1110,
      message: '用户上传头像成功'
    };
  }

  async savePictureInfo(ctx, next) {
    // 1.获取图像信息
    const files = ctx.req.files;
    const { id } = ctx.user;
    const { momentId } = ctx.query;

    // 2.将所有的信息保存到数据库中
    for (let file of files) {
      const { filename, mimetype, size } = file;
      await fileService.createFile(filename, mimetype, size, id, momentId);

    }

    ctx.body = '动态配图上传完成';
  }
}

module.exports = new FileController();