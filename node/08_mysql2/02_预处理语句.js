const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  database: 'coderwhy',
  user: 'root',
  password: 'lsls1234..'
});

const statement = `
  SELECT * FROM students where age > ?; 
`

connection.execute(statement, [18], (err, res, field) => {
  console.log(res);
  connection.end()
})