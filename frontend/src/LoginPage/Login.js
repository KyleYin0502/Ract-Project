import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../LoginPage/Login.scss";
import axios from "axios";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  axios.defaults.withCredentials = true;

  /*Login Function */
  const handleSubmit = (e) => {
    e.preventDefault();
    /*Api POST data */
    axios
      .post("http://localhost:3001/login", { email, password })
      .then((res) => {
        if (res.data.Status === "Success") {
          navigate("/");
          window.location.reload();
        } else {
          alert(res.data.Message);
        }
      })
      .catch((err) => console.log(err));
  };

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
