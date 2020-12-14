class UserService {
  async create(user) {
    console.log(user)
    // 将user存储到数据库中
    return "创建用户成功"
  }
}

module.exports = new UserService();