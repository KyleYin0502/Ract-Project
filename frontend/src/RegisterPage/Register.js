import React from "react";
import "../RegisterPage/Register.scss";

export default function Register() {
  return (
    <div className="register-body">
      <div class="wrapper">
        <div className="from-box register">
          <h2>Register</h2>
          <form action="#">
            <div className="input-box">
              <input type="text" required />
              <label>Username</label>
            </div>
            <div className="input-box">
              <input type="email" required />
              <label>Email</label>
            </div>
            <div className="input-box">
              <input type="password" required />
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
