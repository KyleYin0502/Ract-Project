const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();

app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader("Access-Control-Allow-Origin", "http://127.0.0.1:5000");

  // Request methods you wish to allow
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );

  // Request headers you wish to allow
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader("Access-Control-Allow-Credentials", true);

  // Pass to next layer of middleware
  next();
});
app.use(express.json());
app.use(
  cors({
    origin: ["*"],
    methods: ["POST, GET"],
    credentials: true,
  })
);

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

app.post("/login", (req, res) => {
  const sql = "SELECT * FROM user WHERE email = ? AND password = ?";
  db.query(sql, [req.body.email, req.body.password], (err, data) => {
    if (err) return res.json("Error");
    if (data.length > 0) {
      const name = data[0].name;
      const token = Jwt.sign({ name }, "our-jsonwebtoken-secret-key", {
        expiresIn: "1d",
      });
      res.cookie("token", token);
      return res.json({ Status: "Success" });
    } else {
      return res.json({ Message: "Login Failed" });
    }
  });
});

app.listen(5000, () => {
  console.log("Example app listening on port 5000!");
});
