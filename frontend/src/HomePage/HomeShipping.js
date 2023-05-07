import React from "react";
import { Col, Row } from "antd";

export default function HomeShipping() {
  return (
    <>
      <Row gutter={16}>
        <Col className="home-shipping" span={6}>
          <div>col-6</div>
        </Col>
        <Col className="home-shipping" span={6}>
          <div>col-6</div>
        </Col>
        <Col className="home-shipping" span={6}>
          <div>col-6</div>
        </Col>
        <Col className="home-shipping" span={6}>
          <div>col-6</div>
        </Col>
      </Row>
    </>
  );
}
