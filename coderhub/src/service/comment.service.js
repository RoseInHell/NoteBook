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
}

module.exports  = new CommentService();