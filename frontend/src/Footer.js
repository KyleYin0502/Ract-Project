import React from "react";
import "./Css/Footer.scss";

export default function Footer() {
  return (
    <footer>
      <div>
        <h2 className="logo">Logo</h2>
        <h1 className="logo"> My First React</h1>
      </div>
      <div></div>

      <div className="footer-list">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/product">Product</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
