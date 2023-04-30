import React, { useState } from "react";
import "../LoginPage/Login.scss";
import axios from "axios";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function handleSubmit(event) {
    event.preventDefault();
    axios
      .post("http://localhost:5000/user", { email, password })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }

  return (
    <div className="login-body">
      <div class="wrapper">
        <div className="from-box login">
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="input-box">
              <input
                type="email"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
              <label>Email</label>
            </div>
            <div className="input-box">
              <input
                type="password"
                required
                onChange={(e) => setPassword(e.target.value)}
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
