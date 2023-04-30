const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "React",
});

app.get("/product_list", (req, res) => {
  const q = "SELECT * FROM product_detail";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.post("/user", (req, res) => {
  const sql = "SELECT * FROM user WHERE user_email = ? AND user_password = ?";

  db.query(sql, [req.body.email, req.body.password], (err, data) => {
    if (err) return res.json("Error");
    if (data.length > 0) {
      return res.json("Login Successfully");
    } else {
      return res.json("Login Failed");
    }
  });
});

app.listen(5000, () => {
  console.log("Example app listening on port 5000!");
});
