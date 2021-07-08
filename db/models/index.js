const db = require('../index.js');


const getNames = (req, res) => {
  const sql = 'SELECT * FROM names;';

  db.con.query(sql, (err, data) => {
    if(err) {
      res.status(500).send(err)
    } else {
      res.status(200).send(data)
    }
  })
}

const createUser = (req, res) => {

  let sql = `CREATE TABLE ${req.body.username} (
    id INT NOT NULL PRIMARY KEY  AUTO_INCREMENT,
    gender VARCHAR(15) NOT NULL,
    babyname VARCHAR(50) NOT NULL
    );
    INSERT INTO users (username, email, pass) VALUES(${req.body.username}, ${req.body.email}, ${req.body.password});`




}

const likeName = (req, res) => {
  let sql = `INSERT INTO ${req.body.username} (gender, babyname) VALUES ('${req.body.gender}', ${req.body.name});`

  db.con.query(sql, (err, data) => {
    if(err) {
      res.status(500).send(err)
    } else {
      res.status(201).send(data)
    }
  })
}


module.exports = {
  getNames: getNames,
  createUser: createUser,
  likeName: likeName,
}

