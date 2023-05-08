import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../RegisterPage/Register.scss";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  /*Register Function */
  const handleSubmit = (e) => {
    e.preventDefault();
    /*Api POST data */
    axios
      .post("http://localhost:3001/register", { name, email, password })
      .then((res) => {
        console.log(res);
        navigate("/login");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="register-body">
      <div className="wrapper">
        <div className="from-box register">
          <h2>Register</h2>
          <form onSubmit={handleSubmit}>
            <div className="input-box">
              <input
                type="text"
                required
                onChange={(e) => setName(e.target.value)}
              />
              <label>Username</label>
            </div>
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
              Register
            </button>

            <div className="login-register">
              <p>
                Already have an account?
                <a href="/login" className="Login-link">
                  Login
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
