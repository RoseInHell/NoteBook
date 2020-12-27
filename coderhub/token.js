const Koa = require('koa');
const Router = require('koa-router');
const jwt = require('jsonwebtoken')
const fs = require('fs');

const app = new Koa();
const testRouter = new Router();

const PRIVATE_KEY = fs.readFileSync('./key/private.key');
const PUBLIC_KEY = fs.readFileSync('./key/public.key');

testRouter.get('/test', (ctx, next) => {
  const user = { id:100, name: 'why' }
  const token = jwt.sign(user, PRIVATE_KEY, {
    expiresIn: 100,
    algorithm: "RS256"
  })

  ctx.body = token;
});

testRouter.get('/demo', (ctx, next) => {
  const authorization = ctx.header.authorization;
  const token = authorization.replace("Bearer ", "");
  
  try {
    const result = jwt.verify(token, PUBLIC_KEY, {
      algorithms: ["RS256"]
    });
    ctx.body = result;
  } catch (error) {
    ctx.body = "token是无效的"
  }
})
