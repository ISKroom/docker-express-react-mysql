const keys = require('./keys');

// Express App Setup
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const mysql = require('mysql');

// MySQL Client Setup
const pool = mysql.createPool({
  host: 'mysql',
  user: 'root',
  password: 'password',
  port : 3306,
  database: 'sample_db'
});

// Express route handlers
app.get('/values/test', async (req, res) => {
  pool.query(`select * from sample`, (err, results) => {
    if (err) {
      return res.send(err);
    } else {
      return res.send(results);
    }
  });
});


app.get('/', async (req, res) => {
  res.send('Hi2');
});


app.listen(5000, (err) => {
  console.log('Listening');
});
