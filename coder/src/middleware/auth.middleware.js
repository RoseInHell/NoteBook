const jwt = require('jsonwebtoken');

const errorType = require('../constants/error-type');
const userService = require('../service/user.service');
const authService = require('../service/auth.service');
const md5password = require('../utils/password-handle');
const { PUBLIC_KEY } = require('../app/config');

const verifyLogin = async (ctx, next) => {
  console.log('验证登录的middleware~');

  // 1.获取数据
  const { name, password } = ctx.request.body;
  
  // 2.用户名和密码不能为空
  if (!name || !password) {
    const error = new Error(errorType.NAME_OR_PASSWORD_IS_REQUIRED);
    return ctx.app.emit('error', error, ctx);
  }

  // 3.判断用户是否存在
  const result = await userService.getUserByName(name);
  const user = result[0];
  if (!user) {
    const error = new Error(errorType.USER_DOES_NOT_EXISTS);
    return ctx.app.emit('error', error, ctx);
  }
  
  // 4.判断密码是否正确(加密)
  if (md5password(password) !== user.password) {
    const error = new Error(errorType.PASSWORD_IS_INCORRECT);
    return ctx.app.emit('error', error, ctx);
  }

  ctx.user = user;

  await next();
}

const verifyAuth = async (ctx, next) => {
  console.log("验证授权的middleware~")
  // 1.获取token
  const authorization = ctx.headers.authorization;
  if (!authorization) {
    const error = new Error(errorType.UNAUTHORIZATION);
    return ctx.app.emit('error', error, ctx);
  }
  const token = authorization.replace("Bearer ", "");

  // 2.验证token
  try {
    const result = jwt.verify(token, PUBLIC_KEY, {
      algorithms: ["RS256"]
    });

    ctx.user = result;
    await next();

  } catch (err) {
    console.log(err);
    const error = new Error(errorType.UNAUTHORIZATION);
    ctx.app.emit('error', error, ctx);
  }
}

const verifyPermission = async (ctx, next) => {
  console.log("验证权限的middleware");
  // 1.获取参数
  const [resourceKey] = Object.keys(ctx.params);
  const tableName = resourceKey.replace('Id', '');
  const resourceId = ctx.params[resourceKey];
  const { id } = ctx.user;

  // 2.查询是否具备权限
  try {
    const isPermission = await authService.checkResource(tableName, resourceId, id);

    if (!isPermission) throw new Error();
    await next();

  } catch(err) {
    
    const error = new Error(errorType.UNPERMISSION);
    return ctx.app.emit('error', error, ctx);
  }

  
}

module.exports = {
  verifyLogin,
  verifyAuth,
  verifyPermission
}