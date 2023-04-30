import express from "express";
import mysql from "mysql";
import cors from "cors";
import jwt, { verify } from "jsonwebtoken";
import cookieParser from "cookie-parser";
import bcrypt from "bcrypt";
const salt = 10;

// const express = require("express");
// const mysql = require("mysql");
// const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());
app.use(cookieParser());

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

app.post("/register"),
  async (req, res) => {
    const sql = "INSERT INTO user (name, email, password) VALUES (?, ?, ?)";
    bcrypt.hash(req.body.password.toString(), salt, (err, hash) => {
      if (err) return res.json({ Error: "Error for hassing password" });
      const values = [req.body.name, req.body.email, hash];
      db.query(sql, [values], (err, result) => {
        if (err) return res.json({ Error: "Inserting data Error in server" });
        return;
      });
    });
  };

app.post("/login", async (req, res) => {
  const sql = "SELECT * FROM user WHERE email = ? AND password = ?";
  db.query(sql, [req.body.email, req.body.password], (err, data) => {
    if (err) return res.json({ Massage: "Server Side Error" });
    if (data.length > 0) {
      const name = data[0].name;
      const token = jwt.sign({ name }, "our-jsonwebtoken-secret-key", {
        expiresIn: "1d",
      });
      res.cookie("token", token);
      return res.json({ Status: "Success" });
    } else {
      return res.json("Login Failed");
    }
  });
});

app.listen(5000, () => {
  console.log("Example app listening on port 5000!");
});
