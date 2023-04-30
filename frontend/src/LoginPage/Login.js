import React, { useState } from "react";
import { Await, useNavigate } from "react-router-dom";
import "../LoginPage/Login.scss";
import axios from "axios";

export default function Login() {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    axios
      .post("http://localhost:5000/login", values)
      .then((res) => {
        if (res.data.Status === "Success") {
          navigate("/");
        } else {
          alert(res.data.Message);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="login-body">
      <div className="wrapper">
        <div className="from-box login">
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="input-box">
              <input
                type="email"
                required
                onChange={(e) =>
                  setValues({ ...values, email: e.target.value })
                }
              />
              <label>Email</label>
            </div>
            <div className="input-box">
              <input
                type="password"
                required
                onChange={(e) =>
                  setValues({ ...values, password: e.target.value })
                }
              />
              <label>Password</label>
            </div>
            <button type="submit" className="btn">
              Login
            </button>
            <div className="login-register">
              <p>
                Don't have an account?
                <a href="/register" className="register-link">
                  Register
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
