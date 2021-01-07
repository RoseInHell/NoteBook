const connection = require('../app/database');

class CommentService {
  async create(content, momentId, userId) {
    const statement = `INSERT INTO comment (content, moment_id, user_id) VALUES (?, ?, ?);`;
    const [result] = await connection.execute(statement, [content, momentId, userId]);
    
    return result;
    
  }
  
  async reply(content, momentId, userId, commentId) {
    const statement = `INSERT INTO comment (content, moment_id, user_id, comment_id) VALUES (?, ?, ?, ?);`;
    const [result] = await connection.execute(statement, [content, momentId, userId, commentId]);

    return result;
  }

  async update(commentId, content) {
    const statement = `UPDATE comment SET content = ? WHERE id = ?;`;
    const [result] = await connection.execute(statement, [content, commentId]);
    
    return result;
  }

  async remove(commentId) {
    const statement = `DELETE FROM comment WHERE id = ?;`;
    const [result] = await connection.execute(statement, [commentId]);

    return result;
  }

  async getCommentsByMomentId(momentId) {
    const statement = `
      SELECT 
        c.id, c.content, c.comment_id commentId, c.createAt createTime, c.updateAt updateTime,
        JSON_OBJECT('id', user.id, 'name', user.name) user
      FROM comment c
      LEFT JOIN user  ON user.id = c.user_id
      WHERE moment_id = ?
    `;
    const [result] = await connection.execute(statement, [momentId]);
    
    return result;
  }
}

module.exports  = new CommentService();