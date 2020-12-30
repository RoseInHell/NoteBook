const connection = require('../app/database');

class UserService {
  async create(ctx, next) {

  }

  async getUserByName(name) {
    const statement = `SELECT * FROM user WHERE name = ?;`;
    const [result] = await connection.execute(statement, [name]);
    return result;
  }
}

module.exports = new UserService()