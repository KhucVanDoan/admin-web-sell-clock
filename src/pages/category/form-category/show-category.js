import { Button, Col, Form, Row } from "antd";
import TextArea from "antd/lib/input/TextArea";
import React from "react";
import { useNavigate } from "react-router-dom";
import HomeLayout from "../../../components/HomeLayout";

const ShowCategory = () => {
  const history = useNavigate();
  return (
    <HomeLayout>
      <h2>Chi tiết thương hiệu</h2>
      <Row>
        <Col span={12} style={{ display: "flex" }}>
          <p>Mã thương hiệu:</p>
          <p style={{ marginLeft: "20px" }}>hihi</p>
        </Col>
        <Col span={12} style={{ display: "flex" }}>
          <p>Tên thương hiệu:</p>
          <p style={{ marginLeft: "20px" }}>hihi</p>
        </Col>
        <Col span={24}>
          <Form.Item name="description" label="Mô tả">
            <TextArea rows={4} />
          </Form.Item>
        </Col>
      </Row>
      <Button
        style={{ marginLeft: "90%" }}
        onClick={() => history("/category")}
      >
        Quay lại
      </Button>
    </HomeLayout>
  );
};

export default ShowCategory;
