import React from "react";
import { Carousel } from "antd";
import "../HomePage/Home.scss";

export default function HomeCarousel() {
  return (
    <Carousel autoplay>
      <div className="home-img">
        <img src="../img/HomePage/pexels-jane-doan-1092730.jpg" />
      </div>
      <div className="home-img">
        <img src="../img/HomePage/pexels-photo-1300975.jpeg" />
      </div>
      <div className="home-img">
        <img src="../img/HomePage/strawberries-frisch-ripe-sweet-89778.jpeg" />
      </div>
      <div className="home-img">
        <img src="../img/HomePage/pexels-photo-1300975.jpeg" />
      </div>
    </Carousel>
  );
}
