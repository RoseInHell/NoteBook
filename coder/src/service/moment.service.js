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

  async update(momentId, content) {
    const statement = `UPDATE moment SET content = ? WHERE id = ?;`;
    const [result] = await connection.execute(statement, [content, momentId]);
    console.log(result)

    return result;
  }

  async remove(momentId) {
    const statement = `DELETE FROM moment WHERE id = ?;`;
    const [result] = await connection.execute(statement, [momentId]);

    return result;
  }

  async hasLabel(momentId, labelId) {
    const statement = `SELECT * FROM moment_label WHERE moment_id = ? AND label_id = ?;`;

    const [result] = await connection.execute(statement, [momentId, labelId]);

    return result[0] ? true : false;
  }

  async addLabel(momentId, labelId) {
    const statement = `INSERT INTO moment_label (moment_id, label_id) VALUES (?, ?);`;

    const [result] = await connection.execute(statement, [momentId, labelId]);

    return result;
  }
}

module.exports = new MomentService();