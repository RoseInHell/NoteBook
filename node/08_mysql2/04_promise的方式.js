const mysql = require('mysql2');

const connections = mysql.createPool({
  host: 'localhost',
  prot: 3306,
  database: 'coderwhy',
  user: 'root',
  password: 'lsls1234..',
  connectionLimit: 10
});

const statement = `
  SELECT * FROM products WHERE price > ? && score > ?
`

connections.promise().execute(statement, [6000, 7]).then(([res, fields]) => {
  console.log(res);
}).catch(err => {
  console.log(err);
})