const Multer = require('koa-multer');

const { AVATAR_PATH } = require('../constants/file-path');

// 上传头像
const avatarUpload = Multer({
  dest: AVATAR_PATH
})

const avatarHandler = avatarUpload.single('avatar');

module.exports = {
  avatarHandler
}