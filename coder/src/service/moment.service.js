const connection = require('../app/database');


class MomentService {
  async create(content, userId) {
    const statement = `INSERT INTO moment (content, user_id) VALUES (?, ?);`;
    const [result] = await connection.execute(statement, [content, userId]);

    return result;
  }

  async getMomentList(offset, size) {
    const statement = `SELECT * FROM moment LIMIT ? , ?;`;
    const [result] = await connection.execute(statement, [offset, size]);

    return result;
  }

  async getMomentById(id) {
    const statement = `SELECT * FROM moment WHERE id = ?;`;
    const [result] = await connection.execute(statement, [id]);

    return  result[0]
  }
}

module.exports = new MomentService();