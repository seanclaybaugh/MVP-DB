const mysql = require('mysql');

const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'nomen',
  multipleStatements: true
})

con.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('DB connected');
  }
});

module.exports.con = con;