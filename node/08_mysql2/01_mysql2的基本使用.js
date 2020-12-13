const { log } = require('console');
const mysql = require('mysql2');

// 1.创建数据库连接
const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  database: 'coderwhy',
  user: 'root',
  password: 'lsls1234..'
});

// 2.执行SQL语句
const statement = `
 SELECT * FROM students;
`
connection.query(statement, (err, res, fields) => {
  console.log(res);
  connection.end();
  connection.destroy();
})