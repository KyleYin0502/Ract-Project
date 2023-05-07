import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Css/Header.scss";

export default function Header() {
  const [auth, setAuth] = useState(false);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  axios.defaults.withCredentials = true;

  useEffect(() => {
    axios.get("http://localhost:3001").then((res) => {
      if (res.data.Status === "Success") {
        setAuth(true);
        setName(res.data.name);
      } else {
        setAuth(false);
        setMessage(res.data.Message);
      }
    });
  }, []);

  const handleLogout = () => {
    axios
      .get("http://localhost:3001/logout")
      .then((res) => {
        if (res.data.Status === "Success") {
          window.location.reload();
        } else {
          alert("error");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <header>
      <h2 className="logo">Logo</h2>
      <nav className="menu">
        <a href="/">Home</a>
        <a href="/product">Product</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>

        {auth ? (
          <>
            <a>{name}</a>
            <a href="/" onClick={handleLogout}>
              Logout
            </a>
          </>
        ) : (
          <a href="/login">Login</a>
        )}
      </nav>
    </header>
  );
}
