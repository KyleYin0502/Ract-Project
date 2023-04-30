import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../RegisterPage/Register.scss";

export default function Register() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:5000/register", values)
      .then((res) => {
        if (res.data.useState === "Success") {
          navigate("/login");
        } else {
          alert("Error");
        }
      })
      .catch((err) => {
        console.log(err);
        // display error message to user
      });
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
                onChange={(e) => setValues({ ...values, name: e.target.value })}
              />
              <label>Username</label>
            </div>
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
