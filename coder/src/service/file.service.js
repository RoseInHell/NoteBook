const connection = require('../app/database');

class FileService {
  async createAvatar(mimetype, filename, size, userId) {
    const statement = `INSERT INTO avatar (mimetype, filename, size, user_id) VALUES (?, ?, ?, ?);`;
    const [result] = await connection.execute(statement, [mimetype, filename, size, userId]);

    return  result;
  }

  async getAvatarByUserId(userId) {
    const statement = `SELECT * FROM avatar WHERE user_id = ?;`;
    const [result] = await connection.execute(statement, [userId]);

    return result[0];
  }
}

module.exports = new FileService();