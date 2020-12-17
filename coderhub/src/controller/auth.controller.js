class AuthController {
  async login(ctx, next) {
    const { name } = ctx.request.body;
    ctx.body = `login success, welcome back ${name}`
  }
}

module.exports = new AuthController();