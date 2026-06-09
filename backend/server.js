const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "10@#2007nityaNV",
  database: "portfolio"
});

db.connect(err => {
  if (err) {
    console.log("DB Error:", err);
  } else {
    console.log("MySQL Connected");
  }
});

app.get("/projects", (req, res) => {
  db.query("SELECT * FROM projects", (err, results) => {
    if (err) return res.send(err);
    res.json(results);
  });
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});