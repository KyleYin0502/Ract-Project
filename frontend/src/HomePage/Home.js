import React from "react";
import HomeShipping from "../HomePage/HomeShipping";
import HomeCarousel from "../HomePage/HomeCarousel";
import { Divider } from "antd";

export default function Home() {
  return (
    <>
      <HomeCarousel />
      <Divider />
      <HomeShipping />
    </>
  );
}
