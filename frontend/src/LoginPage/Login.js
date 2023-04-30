<<<<<<< HEAD
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
=======
import React from "react";
>>>>>>> parent of 6cae330 (login part)
import "../LoginPage/Login.scss";

export default function Login() {
<<<<<<< HEAD
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  axios.defaults.withCredentials = true;

  function handleSubmit(event) {
    event.preventDefault();
    axios
      .post("http://127.0.0.1:5000/login", values)
      .then((res) => {
        if (res.data.Status === "Success") {
          navigate("/");
        } else {
          alert(res.data.Message);
        }
      })
      .catch((err) => console.log(err));
  }

=======
>>>>>>> parent of 6cae330 (login part)
  return (
    <div className="login-body">
      <div className="wrapper">
        <div className="from-box login">
          <h2>Login</h2>
          <form action="#">
            <div className="input-box">
<<<<<<< HEAD
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
=======
              <input type="email" required />
              <label>Email</label>
            </div>
            <div className="input-box">
              <input type="password" required />
>>>>>>> parent of 6cae330 (login part)
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
