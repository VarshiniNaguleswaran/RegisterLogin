const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql');

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'LoginRegister'
});

db.connect(err => {
  if (err) throw err;
  console.log('MySQL connected...');
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const query = 'SELECT * FROM user WHERE username = ? AND password = ?';
  db.query(query, [username, password], (err, results) => {
    if (err) throw err;
    if (results.length > 0) {
      res.send({ success: true, user: results[0] });
    } else {
      res.send({ success: false, message: 'Invalid username or password' });
    }
  });
});

app.post('/register', (req, res) => {
  const { username, password } = req.body;
  const query = 'INSERT INTO user (username, password) VALUES (?, ?)';
  db.query(query, [username, password], (err, result) => {
    if (err) {
      res.status(500).send({ success: false, message: 'User registration failed', error: err.message });
    } else {
      res.send({ success: true, message: 'User registered successfully' });
    }
  });
});


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
