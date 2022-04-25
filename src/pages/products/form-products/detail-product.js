import { Button, Col, Row } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import HomeLayout from "../../../components/HomeLayout";

const DetailProduct = () => {
  const history = useNavigate();
  return (
    <HomeLayout>
      <h2>Chi tiết sản phẩm</h2>
      <Row>
        <Col span={12} style={{ display: "flex" }}>
          <p>Mã sản phẩm:</p>
          <p style={{ marginLeft: "20px" }}>hihi</p>
        </Col>
        <Col span={12} style={{ display: "flex" }}>
          <p>Tên sản phẩm:</p>
          <p style={{ marginLeft: "20px" }}>hihi</p>
        </Col>
        <Col span={12} style={{ display: "flex" }}>
          <p>Tên Thương hiệu:</p>
          <p style={{ marginLeft: "20px" }}>hihi</p>
        </Col>
        <Col span={12} style={{ display: "flex" }}>
          <p>Giá:</p>
          <p style={{ marginLeft: "20px" }}>hihi</p>
        </Col>
      </Row>
      <Button
        style={{ marginLeft: "70%" }}
        onClick={() => history("/products")}
      >
        Quay lại
      </Button>
    </HomeLayout>
  );
};

export default DetailProduct;
