import React from "react";
import "../LoginPage/Login.scss";

export default function Login() {
  return (
    <div className="login-body">
      <div class="wrapper">
        <div className="from-box login">
          <h2>Login</h2>
          <form action="#">
            <div className="input-box">
              <input type="email" required />
              <label>Email</label>
            </div>
            <div className="input-box">
              <input type="password" required />
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
