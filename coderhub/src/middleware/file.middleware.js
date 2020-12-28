const path = require('path');
const Multer = require('koa-multer');
const Jimp = require('jimp');

const { AVATAR_PATH, PICTURE_PATH } = require('../constants/file-path');

// 上传头像
const avatarUpload = Multer({
  dest: AVATAR_PATH
});

const avatarHandler = avatarUpload.single('avatar');


// 上传图片
const pictureUpload = Multer({
  dest: PICTURE_PATH
});

const pictureHandler = pictureUpload.array('picture', 9)


// 调整图片大小
const pictureResize = async (ctx, next) => {
  // 1.获取所有的图像信息
  const files = ctx.req.files;

  // 2.对图像进行处理(sharp/jimp)

  for (let file of files) {
    const destPath = path.join(file.destination, file.filename);
    Jimp.read(file.path).then(imgage => {
      imgage.resize(1280, Jimp.AUTO).write(`${destPath}-large`);
      imgage.resize(640, Jimp.AUTO).write(`${destPath}-middle`);
      imgage.resize(640, Jimp.AUTO).write(`${destPath}-small`);
    })
  }

  await next();
}



module.exports = {
  avatarHandler,
  pictureHandler,
  pictureResize
}
