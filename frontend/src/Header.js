import React from "react";
import "./Css/Header.scss";

export default function Header() {
  return (
    <header>
      <h2 className="logo">Logo</h2>
      <nav className="menu">
        <a href="/">Home</a>
        <a href="/product">Product</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
        <a href="/login">Login</a>
      </nav>
    </header>
  );
}
