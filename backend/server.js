// import express from "express";
// import mysql from "mysql";
// import cors from "cors";
// import bodyParser from "body-parser";

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

app.post("/register", (req, res) => {
  const sql = "INSERT INTO user (`name`, `email`, `password`) VALUES (?, ?, ?)";
  db.query(
    sql,
    [req.body.name, req.body.email, req.body.password],
    (err, data) => {
      if (err) return res.json("Error");

      return res.send("Register Successfully");
    }
  );
});

app.post("/login", (req, res) => {
  const sql = "SELECT * FROM user WHERE email = ? AND password = ?";
  db.query(sql, [req.body.email, req.body.password], (err, data) => {
    if (err) return res.json("Error");
    if (data.length > 0) {
      return res.json("Login Successfully");
    } else {
      return res.json("No Recoed");
    }
  });
});

app.listen(3001, () => {
  console.log("Example app listening on port 3001!");
});
